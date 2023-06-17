import {
  forwardRef,
  Ref,
  ReactNode,
  ForwardedRef,
  LegacyRef,
  MutableRefObject,
} from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

interface ModelContainerInt {
  children: ReactNode;
}

export const ModelContainer = forwardRef(
  ({ children }: ModelContainerInt, ref: ForwardedRef<HTMLDivElement>) => (
    <Box
      ref={ref}
      className="3d-model"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
);
ModelContainer.displayName = "ModelContainer";

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
