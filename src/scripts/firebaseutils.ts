import { FirebaseError } from "firebase/app";

function processError(
  errorDiv: Element,
  error: unknown,
  ownMessage: string | undefined = "Some unknown error happened... my bad"
) {
  errorDiv.textContent =
    error instanceof FirebaseError ? error.message : ownMessage;
}

export { processError };
