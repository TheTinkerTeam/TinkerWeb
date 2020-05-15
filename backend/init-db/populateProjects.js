require("dotenv").config();
const mongoose = require("mongoose");

const { connect, disconnect } = require("../src/config/db");

const Project = require("../src/models/Project");
const User = require("../src/models/User");
const Standard = require("../src/models/Standard");
const Supply = require("../src/models/Supply");

const projects = require("./projects");

async function populateProjects() {
  console.log("Populating projects...");

  await connect();

  const session = await mongoose.startSession();
  session.startTransaction();

  try {

    const createdProjects = await Promise.all(
      projects.map(
        async project => await populateProject(project, session)
      )
    ) ;

    await session.commitTransaction();
    console.log("Project population is successful.");
  } catch (error) {
    await session.abortTransaction();
    console.log("Project population has failed.");
    console.error(error);
  }

  session.endSession();

  await disconnect();

  console.log("Project population is done.");
}

async function populateProject(project, session) {
  const projectInDatabase = await Project.find({
    title: project.title,
  }).session(session);

  if (projectInDatabase.length > 0) {
    return projectInDatabase[0];
  }

  console.log(`Adding Project [${project.title}] to database...`);

  project["standards"] = await Promise.all(
    project["standards"].map(
      async (standard) => await populateStandard(standard, session)
    )
  );

  project["buildingSupplies"] = await Promise.all(
    project["buildingSupplies"].map(
      async (supply) => await populateSupply(supply, session)
    )
  );

  project["upcycledSupplies"] = await Promise.all(
    project["upcycledSupplies"].map(
      async (supply) => await populateSupply(supply, session)
    )
  );

  project["tools"] = await Promise.all(
    project["tools"].map(
      async (supply) => await populateSupply(supply, session)
    )
  );

  project["author"] = await populateAuthor(project["author"], session);

  return (await Project.create([project], { session: session }))[0];
}

async function populateStandard(standard, session) {
  const standardInDatabase = await Standard.find({
    code: standard.code,
  }).session(session);

  if (standardInDatabase.length > 0) {
    return standardInDatabase[0];
  }

  console.log(`Adding Standard [${standard.code}] to database...`);
  return (await Standard.create([standard], { session: session }))[0];
}

async function populateSupply(supply, session) {
  const supplyInDatabase = await Supply.find({ name: supply.name }).session(
    session
  );

  if (supplyInDatabase.length > 0) {
    return supplyInDatabase[0];
  }

  console.log(`Adding Supply [${supply.name}] to database...`);
  return (await Supply.create([supply], { session: session }))[0];
}

async function populateAuthor(author, session) {
  const authorInDatabase = await User.find({ email: author.email }).session(
    session
  );

  if (authorInDatabase.length > 0) {
    return authorInDatabase[0];
  }

  console.log(`Adding User [${author.email}] to database...`);
  return (await User.create([author], { session: session }))[0];
}

populateProjects().catch((error) => console.log(error.stack));
