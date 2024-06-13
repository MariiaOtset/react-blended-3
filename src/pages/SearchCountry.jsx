import { Container, Heading, Section, SearchForm } from 'components';
import { useSearchParams } from 'react-router-dom';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm searchForm={submit} />
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};
