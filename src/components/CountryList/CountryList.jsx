import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link>
            <img src={item.flag} alt={item.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
