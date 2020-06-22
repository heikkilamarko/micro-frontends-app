export function formatedError(error) {
  let message = 'Operation failed.';

  const err = error?.response?.data?.error;

  if (err) {
    const { code = 'Bad Request', details } = err;

    message = code;

    if (details) {
      message += `\n${JSON.stringify(details, null, 2)}`;
    }
  }

  return message;
}

export function navigate(to, params = {}) {
  window.dispatchEvent(new CustomEvent('app.nav', { detail: { to, params } }));
}
