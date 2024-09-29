import { useFormik } from 'formik';
import React, { useState } from 'react';

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import PrimaryButton from '@/components/common/PrimaryButton';
import { socialMediaPlatforms } from '@/utils/globalConsts';

import { useSocialAccountActions } from '@/hooks/dashboard/useSocialAccountActions';
import { SocialAccountFormValues } from '@/types';
import { validationSchemaAddSocialMedia } from '@/utils/validationShemes';

const initialFormValues = {
  socialMediaName: '',
  accountName: '',
  followers: 0,
  following: 0,
  engagementRate: 0,
};

const AddSocialMediaForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [useTextInput, setUseTextInput] = useState(false);
  const { handleAddSocialAccount } = useSocialAccountActions();

  const toggleInputMethod = () => {
    setUseTextInput(!useTextInput);
  };

  const handleSubmit = (values: SocialAccountFormValues) => {
    try {
      handleAddSocialAccount(values);
    } catch (error) {
      onClose();

      console.error('Error adding social account:', error);
    }
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchemaAddSocialMedia,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      {useTextInput ? (
        <TextField
          label="Social Media Name"
          name="socialMediaName"
          fullWidth
          value={formik.values.socialMediaName}
          onChange={formik.handleChange}
          error={
            formik.touched.socialMediaName &&
            Boolean(formik.errors.socialMediaName)
          }
          helperText={
            formik.touched.socialMediaName && formik.errors.socialMediaName
          }
        />
      ) : (
        <Select
          name="socialMediaName"
          fullWidth
          value={formik.values.socialMediaName}
          onChange={formik.handleChange}
          error={
            formik.touched.socialMediaName &&
            Boolean(formik.errors.socialMediaName)
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {socialMediaPlatforms.map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </Select>
      )}
      <Button
        variant="outlined"
        color="inherit"
        onClick={toggleInputMethod}
        className="my-2"
      >
        {useTextInput ? 'Select from list' : 'Input manually'}
      </Button>

      <TextField
        label="Social Account Name"
        name="accountName"
        margin="normal"
        fullWidth
        value={formik.values.accountName}
        onChange={formik.handleChange}
        error={formik.touched.accountName && Boolean(formik.errors.accountName)}
        helperText={formik.touched.accountName && formik.errors.accountName}
      />
      <TextField
        label="Followers"
        name="followers"
        type="number"
        fullWidth
        margin="normal"
        value={formik.values.followers}
        onChange={formik.handleChange}
        error={formik.touched.followers && Boolean(formik.errors.followers)}
        helperText={formik.touched.followers && formik.errors.followers}
      />
      <TextField
        label="Following"
        name="following"
        type="number"
        fullWidth
        margin="normal"
        value={formik.values.following}
        onChange={formik.handleChange}
        error={formik.touched.following && Boolean(formik.errors.following)}
        helperText={formik.touched.following && formik.errors.following}
      />
      <TextField
        label="Engagement rate"
        name="engagementRate"
        type="number"
        fullWidth
        inputProps={{ min: 0, max: 10 }}
        margin="normal"
        value={formik.values.engagementRate}
        onChange={formik.handleChange}
        error={
          formik.touched.engagementRate && Boolean(formik.errors.engagementRate)
        }
        helperText={
          formik.touched.engagementRate && formik.errors.engagementRate
        }
      />
      <Typography variant="body2" component="p" color="textSecondary">
        Other account information will be added as mock data
      </Typography>
      <PrimaryButton
        variant="contained"
        color="primary"
        className="mt-5"
        fullWidth
        type="submit"
      >
        Add Account
      </PrimaryButton>
    </Box>
  );
};

export default AddSocialMediaForm;
