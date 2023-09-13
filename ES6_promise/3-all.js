import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResp, userResp]) => {
      const { body: photoBody } = photoResp;
      const { firstName, lastName } = userResp;
      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
