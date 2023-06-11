import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job3">
    <Container>
      <Title>
        Job 3 <Badge>2004-2009</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/32x32.webp" alt="icon" />
      </Center>
      <P>
        Ut porta ipsum auctor, interdum nulla quis, euismod nibh. Sed auctor,
        lectus ac tincidunt cursus, augue velit rhoncus turpis, et auctor sapien
        nulla id orci. Nulla aliquam sem eu justo consequat, vitae pretium magna
        egestas. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nam pulvinar imperdiet justo vitae
        malesuada. Nullam quis consequat libero. In molestie tempor dui sed
        consequat.
      </P>
      <P>
        Morbi pellentesque urna sit amet tortor varius, sit amet elementum ex
        vulputate. Curabitur ornare arcu sed ornare dapibus. Phasellus euismod,
        metus quis dignissim efficitur, tellus sapien commodo neque, at rutrum
        orci justo in turpis. Curabitur elementum, risus vel molestie
        sollicitudin, libero ante ultricies nibh, eget cursus orci augue vel
        lectus.
      </P>
      <P>
        Proin vel arcu lacinia, suscipit urna finibus, dignissim magna. In hac
        habitasse platea dictumst. Duis eu rutrum erat. Etiam id mauris lectus.
        Nulla at euismod lectus, vitae euismod mauris. Mauris ut ultrices nunc,
        a viverra ligula. Morbi nisl ex, vestibulum semper lacus elementum,
        venenatis lobortis justo
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Vivamus</Meta>
          <span>Nullam</span>
        </ListItem>
        <ListItem>
          <Meta>Tempus</Meta>
          <span>Morbi</span>
        </ListItem>
        <ListItem>
          <Meta>Dcondimentum</Meta>
          <Link href="#">v1.0.5</Link>
        </ListItem>
        <ListItem>
          <Meta>Morbi hendrerit</Meta>
          <span>2009/02/16</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Suspendisse ultrices</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Fringilla</Badge>
            Nullam vel quam sollicitudin, imperdiet justo a, vestibulum sem.
            Donec rhoncus risus eros, at ultricies enim commodo vel{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          Fusce sodales&nbsp;
          <Link target="_blank" href="#">
            from Vector
          </Link>
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Duis ac enim mollis, egestas enim ultrices</Badge>
          <span>
            Vestibulum nec massa accumsan, elementum metus sed, interdum augue.
            Nam magna nisl, dictum vehicula rhoncus et, vestibulum nec lectus.
            Sed facilisis porttitor risus.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>In ullamcorper volutpat leo in dapibus</Badge>
          <span>
            Nullam varius velit vel dolor blandit, quis semper mauris tincidunt
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Quisque elementum tempor semper</Badge>
          <span>
            Ut ut tempus turpis. In quam nisi, condimentum ac neque at, porta
            commodo eros. Integer vel odio facilisis, pretium ligula ut,
            volutpat lorem. Phasellus porta nec nibh eget condimentum.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Morbi hendrerit sit amet ipsum vel aliquet</Badge>
          <span>
            Duis tempor rhoncus massa, in lacinia eros tincidunt in. Nunc
            fringilla sagittis diam, quis laoreet libero accumsan sed.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Etiam lobortis turpis massa</Badge>
          <span>
            Vestibulum nec massa accumsan, elementum metus sed, interdum
            augue...
          </span>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/600x400.webp" alt="job3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
