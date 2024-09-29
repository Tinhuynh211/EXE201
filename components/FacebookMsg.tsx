"use client";

import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1615852308975607" chatSupport>
      <CustomChat pageId="406386295898124" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
