import DocsContent from "@/components/docs/common/DocsContent";
import DocsLayout from "@/components/docs/common/DocsLayout";
import AvatarGroupMax from "@/components/docs/components/Avatar/AvatarGroupMax";
import AvatarIcon from "@/components/docs/components/Avatar/AvatarIcon";
import AvatarImgUrl from "@/components/docs/components/Avatar/AvatarImgUrl";
import { useTranslation } from "react-i18next";

const Avatar = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={"Avatar"}
        description={t("Avatar_Description")}
        imports={["Avatar", "AvatarGroup"]}
        src={"Avatar"}
        examples={[
          { title: "imgUrl", component: AvatarImgUrl },
          { title: "max", component: AvatarGroupMax },
          { title: "icon", component: AvatarIcon },
        ]}
        props={[
          {
            name: "index",
            type: ["number"],
            description: "Avatar index",
          },
          {
            name: "max (AvatarGroup)",
            type: ["number"],
            description: "Avatar max Count",
          },
          {
            name: "name",
            type: ["string"],
            description: "Avatar name",
          },
          {
            name: "imgUrl",
            type: ["string"],
            description: "Custom Img",
          },
          {
            name: "icon",
            type: ["React Element"],
            description: "Custom Icon",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Avatar;
