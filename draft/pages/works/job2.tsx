import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Job2">
    <Container>
      <Title>
        Job 2 <Badge>2015</Badge>
      </Title>
      <P>
        Nunc non ligula pulvinar turpis vulputate fringilla nec suscipit nibh.
        Proin sit amet auctor tellus, vestibulum scelerisque risus. Quisque
        pharetra neque in risus tincidunt convallis ac ut nunc. Quisque non
        tincidunt nunc. In eros orci, faucibus eu volutpat nec, feugiat ut elit.
        Duis mattis quis est in vestibulum. Nam dictum tristique suscipit.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Donec</Meta>
          <span>In efficitur justo augue, eu dapibus sem mattis nec</span>
        </ListItem>
        <ListItem>
          <Meta>Integer</Meta>
          <Link href="#">
            Nam sed justo posuere, semper leo sit amet{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Vivamus</Meta>
          <Link href="#">
            Cras elementum massa nibh, at cursus dolor bibendum at{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Praesent</Meta>
          <Link href="#">
            pretium ut turpis. Nunc vel molestie nisl
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Sed vel orci mi</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Cras elementum</Badge>
            Praesent convallis aliquam eros, et aliquam nisl rhoncus sed
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#">
            <Badge mr={2}>Vivamus</Badge>
            Praesent convallis aliquam eros, et aliquam nisl rhoncus sed
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Box>
        <iframe
          src="#"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          style={{ display: 'none' }}
        />
      </Box>

      <WorkImage src="/images/720x400.webp" alt="job2" />
      <WorkImage src="/images/600x400.webp" alt="job2" />
      <WorkImage src="/images/600x400.webp" alt="job2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
