import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import AvatarGroupMax from "@/components/docs/components/Avatar/AvatarGroupMax";
import AvatarIcon from "@/components/docs/components/Avatar/AvatarIcon";
import AvatarImgUrl from "@/components/docs/components/Avatar/AvatarImgUrl";

const Avatar = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Avatar"}
        description={
          "Avatar is a used to represent user, and displays the profile picture, initials or fallback icon."
        }
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
            defaultVal: "null",
          },
          {
            name: "max (AvatarGroup)",
            type: ["number"],
            defaultVal: "null",
          },
          {
            name: "name",
            type: ["string"],
            defaultVal: "null",
          },
          {
            name: "imgUrl",
            type: ["string"],
            defaultVal: "null",
          },
          {
            name: "icon",
            type: ["React Element"],
            defaultVal: "null",
          },
        ]}
      />
    </DocsLayout>
  );
};

export default Avatar;
