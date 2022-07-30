import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...other }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...other} />
    );
export default WithSpinner;
