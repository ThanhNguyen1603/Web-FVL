import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Introduction = () => {
  return (
    <iframe className="embed-responsive-item"
      src="https://drive.google.com/file/d/1m_2f_FiacceCI65EZ5BHerJBehp1zFc_/preview"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Tệp từ Google Drive"
      as="script"
    ></iframe>
  )
}
const WeWorkVideo = () => {
  return (
    <iframe
      src="https://player.vimeo.com/video/1017348844?h=8373a4ea4a"
      className="embed-responsive-item"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="WeWork Video"
      allowfullscreen
      style={{ width: '100%', height: '675px' }}
    ></iframe >
  );
}
const WePlayVideo = () => {
  return (
    <iframe src="https://player.vimeo.com/video/1017011076?h=e82fbfaacb"
      className="embed-responsive-item"

      style={{ width: '100%', height: '675px' }} frameborder="0" allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
      title="Tệp từ Google Drive" as="scipt">
    </iframe>
  )

}
const WeGiveVideo = () => {
  return (
    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fturkeydashvietnam%2Fvideos%2F441023589936233%2F&show_text=false&width=560&t=0"
      className="embed-responsive-item" style={{ width: '100%', height: '675px' }} frameborder="0"
      allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Tệp từ Google Drive" as="scipt">
    </iframe>
  )

}

const DreamSmile = () => {
  return (
    <iframe src="https://player.vimeo.com/video/1031456896?h=4c67ac9925"

      className="embed-responsive-item" style={{ width: '100%', height: '675px' }} frameborder="0"
      allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Tệp từ Vimeo" as="scipt">
    </iframe>
  )
}

export { Introduction, WeWorkVideo, WePlayVideo, WeGiveVideo, DreamSmile }
