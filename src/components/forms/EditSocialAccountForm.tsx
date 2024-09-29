import { Form, Formik } from 'formik';
import React from 'react';

import { useAppDispatch } from '@/hooks/useTypedSelector';
import { updateSocialAccount } from '@/store/socialAccount/socialAccountThunks';
import { SocialAccount } from '@/types';
import { validationSchemaAddSocialMedia } from '@/utils/validationShemes';
import { Box, TextField } from '@mui/material';
import PrimaryButton from '../common/PrimaryButton';

interface EditSocialAccountFormProps {
  account: SocialAccount;
  onClose: () => void;
}

const EditSocialAccountForm: React.FC<EditSocialAccountFormProps> = ({
  account,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={account}
      validationSchema={validationSchemaAddSocialMedia}
      onSubmit={(values) => {
        dispatch(updateSocialAccount(values));
        onClose();
      }}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Box mb={2}>
            <TextField
              label="Social Media Name"
              name="socialMediaName"
              value={values.socialMediaName}
              onChange={handleChange}
              error={touched.socialMediaName && Boolean(errors.socialMediaName)}
              helperText={touched.socialMediaName && errors.socialMediaName}
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Account Name"
              name="accountName"
              value={values.accountName}
              onChange={handleChange}
              error={touched.accountName && Boolean(errors.accountName)}
              helperText={touched.accountName && errors.accountName}
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Followers"
              name="followers"
              type="number"
              value={values.followers}
              onChange={handleChange}
              error={touched.followers && Boolean(errors.followers)}
              helperText={touched.followers && errors.followers}
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Following"
              name="following"
              type="number"
              value={values.following}
              onChange={handleChange}
              error={touched.following && Boolean(errors.following)}
              helperText={touched.following && errors.following}
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Engagement Rate"
              name="engagementRate"
              type="number"
              value={values.engagementRate}
              onChange={handleChange}
              error={touched.engagementRate && Boolean(errors.engagementRate)}
              helperText={touched.engagementRate && errors.engagementRate}
              fullWidth
            />
          </Box>

          <PrimaryButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Update Account
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
};

export default EditSocialAccountForm;
