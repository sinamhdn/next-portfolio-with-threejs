import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job7">
    <Container>
      <Title>
        Job 7 <Badge>2016</Badge>
      </Title>
      <P>
        Ut semper, urna sit amet porttitor tincidunt, libero odio faucibus
        velit, eget fringilla ante sapien in tortor.
      </P>
      <P>
        Aenean euismod bibendum augue{' '}
        <Link href="#" target="_blank">
          Duis at neque euismod, placerat est non, pellentesque turpis{' '}
          <ExternalLinkIcon mx="2px" />
        </Link>
        , Mauris fermentum massa ac pulvinar rhoncus. Sed blandit metus ac erat
        scelerisque tincidunt. Curabitur tincidunt velit ac augue posuere
        porttitor.
      </P>
      <P>
        Duis at neque euismod, placerat est non, pellentesque turpis. In
        sagittis eu odio eu scelerisque. Praesent ac urna aliquet, scelerisque
        ipsum ut, rutrum diam. Curabitur placerat, tellus quis vulputate
        hendrerit, ipsum metus dapibus dui, eu iaculis nisl dui quis metus.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Nullam</Meta>
          <span>Morbi</span>
        </ListItem>
        <ListItem>
          <Meta>Proin</Meta>
          <span>Etiam</span>
        </ListItem>
        <ListItem>
          <Meta>Vestibulum</Meta>
          <Link href="#">
            Curabitur vulputate eleifend lorem, dictum lobortis quam dapibus
            quis. Quisque maximus at lorem eu lobortis{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="#">
            Sed fermentum suscipit nunc, vitae luctus lacus pharetra in{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/720x400.webp" alt="job7" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/600x400.webp" alt="job7" />
        <WorkImage src="/images/600x400.webp" alt="job7" />
      </SimpleGrid>
      <WorkImage src="/images/600x400.webp" alt="job7" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
