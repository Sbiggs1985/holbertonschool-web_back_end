import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handlePromise(promiseFn) {
  const result = {
    status: 'pending',
    value: '',
  };

  try {
    const data = await promiseFn();
    result.status = 'fulfilled';
    result.value = data;
  } catch (error) {
    result.status = 'rejected';
    result.value = error.toString();
  }

  return result;
}

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = await Promise.all([
    handlePromise(() => signUpUser(firstName, lastName)),
    handlePromise(() => uploadPhoto(fileName)),
  ]);

  return [user, photo];
}
