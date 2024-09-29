import React from 'react';

interface AccountMainPhotoProps {
  url: string;
  alt: string;
}

const AccountMainPhoto: React.FC<AccountMainPhotoProps> = ({ url, alt }) => {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 flex items-center justify-center mx-auto">
      <img src={url} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default AccountMainPhoto;
