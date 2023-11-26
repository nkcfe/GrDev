import AWS from "aws-sdk";

export const imageHandler = async () => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
  input.addEventListener("change", async () => {
    //이미지를 담아 전송할 file을 만든다
    const file = input.files?.[0];
    try {
      //업로드할 파일의 이름으로 Date 사용
      const name = Date.now();
      //생성한 s3 관련 설정들
      AWS.config.update({
        region: process.env.REACT_APP_AWS_S3_BUCKET_REGION,
        accessKeyId: process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY,
      });
      //앞서 생성한 file을 담아 s3에 업로드하는 객체를 만든다
      const upload = new AWS.S3.ManagedUpload({
        params: {
          ACL: "public-read",
          Bucket: "groovy-dev-image", //버킷 이름
          Key: `upload/${name}`,
          Body: file,
        },
      });
      //이미지 업로드 후
      //곧바로 업로드 된 이미지 url을 가져오기
      const res = await upload.promise();
      const IMG_URL = res.Location;
      return IMG_URL;
    } catch (error) {
      console.log(error);
    }
  });
};
