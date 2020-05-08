import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import GeneralList from "../../lists/GeneralList";

const UserProfileDescription = ({ student }) => {
  return (
    <Grid.Column width={16}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header
              icon='calendar outline'
              content={`About ${student.firstName}`}
            />
            <p>
              I am a <strong>{student.role}</strong>
            </p>
            <p>
              Originally from{" "}
              <strong>
                {student.country ? student.country : "no country yet"}
              </strong>
            </p>
            <p>
              Description:{" "}
              {student.description ? student.description : "no description yet"}
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header content='Interests' />
            {student.interests.length === 0 ? (
              <div>No interests</div>
            ) : (
              <GeneralList array={student.interests} />
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserProfileDescription;
