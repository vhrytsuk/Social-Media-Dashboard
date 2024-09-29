import * as Yup from 'yup';

const validationSchemaAddSocialMedia = Yup.object().shape({
  socialMediaName: Yup.string().required('Social Media Name is required'),
  accountName: Yup.string().required('Account Name is required'),
  followers: Yup.number()
    .required('Followers count is required')
    .typeError('Followers must be a number'),
  following: Yup.number()
    .required('Following count is required')
    .typeError('Following must be a number'),
  engagementRate: Yup.number()
    .required('Engagement rate is required')
    .typeError('Engagement Rate must be a number'),
});

export { validationSchemaAddSocialMedia };
