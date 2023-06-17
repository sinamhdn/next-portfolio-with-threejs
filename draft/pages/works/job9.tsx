import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job9">
    <Container>
      <Title>
        Job 9 <Badge>2017</Badge>
      </Title>
      <P>
        Curabitur mauris consequat, facilisis dolor porta, sollicitudin nisi.
        Integer quis blandit lacus. In id neque id nulla consectetur convallis
        ut id nulla. Sed ornare mauris tortor, nec faucibus dui pretium eget.
        Nunc suscipit iaculis ante, vitae placerat nunc faucibus ut. Maecenas
        posuere mi dui, non molestie metus semper ac. Curabitur condimentum
        volutpat lacus, vitae feugiat purus vulputate id.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Aenean</Meta>
          <span>Nulla</span>
        </ListItem>
        <ListItem>
          <Meta>Suspendisse</Meta>
          <span>Curabitur</span>
        </ListItem>
        <ListItem>
          <Meta>Lobortis</Meta>
          <Link href="#">
            Vitae <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="#"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'none' }}
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/720x400.svg" alt="job9" />
      <WorkImage src="/images/600x400.svg" alt="job9" />
      <WorkImage src="/images/600x400.svg" alt="job9" />
      <WorkImage src="/images/600x400.svg" alt="job9" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
