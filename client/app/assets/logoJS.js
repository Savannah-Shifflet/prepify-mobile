import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export default function SvgLogo(props) {
    return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={'100%'}
    height={'100%'}
    fill="none"
    viewBox="0 0 100 36"
    {...props}
  >
    <Path
      fill="#D1E8F8"
      d="M10.874 18.914v4.746c0 .42-.015.83-.044 1.23-.02.401-.103.758-.249 1.07a1.71 1.71 0 0 1-.66.762c-.302.185-.736.278-1.303.278-.547 0-.972-.093-1.274-.278a1.738 1.738 0 0 1-.645-.762 3.244 3.244 0 0 1-.249-1.07c-.02-.4-.03-.81-.03-1.23V9.832c0-.42.01-.83.03-1.23.03-.4.112-.757.25-1.07a1.65 1.65 0 0 1 .644-.747c.302-.195.727-.293 1.274-.293h4.834c1.211.059 2.295.313 3.252.762.41.195.806.44 1.187.732.39.293.737.655 1.04 1.084.312.42.561.923.747 1.51.185.575.278 1.244.278 2.006 0 1.045-.166 1.963-.498 2.754a5.163 5.163 0 0 1-1.42 1.977c-.616.528-1.373.928-2.271 1.202-.89.263-1.895.395-3.018.395h-1.875Zm1.992-3.486c.489-.03.928-.147 1.319-.352.166-.088.327-.2.483-.337.156-.137.298-.303.425-.498.127-.205.224-.444.293-.718.078-.273.117-.585.117-.937 0-.332-.04-.62-.117-.864a2.174 2.174 0 0 0-.279-.645 2.094 2.094 0 0 0-.395-.469 2.758 2.758 0 0 0-.454-.322 3.404 3.404 0 0 0-1.245-.337h-2.139v5.479h1.992Zm18.604-.88c0 .762-.19 1.32-.572 1.67-.37.352-.903.528-1.596.528-.098 0-.24.01-.425.03-.176.01-.366.048-.571.117a2.702 2.702 0 0 0-.63.278 2.077 2.077 0 0 0-.571.498 2.337 2.337 0 0 0-.425.791c-.108.322-.161.708-.161 1.157v4.19c0 .4-.025.79-.074 1.172-.039.38-.136.722-.293 1.025-.156.293-.38.532-.674.718-.293.185-.688.278-1.186.278-.488 0-.874-.093-1.157-.278a1.936 1.936 0 0 1-.66-.718 3.302 3.302 0 0 1-.292-1.026 11.5 11.5 0 0 1-.059-1.171v-8.203c0-.41.02-.806.059-1.187.048-.39.146-.737.293-1.04.156-.303.376-.542.659-.718.283-.185.669-.278 1.157-.278.498 0 .879.112 1.143.337.273.215.473.498.6.85.127.341.2.727.22 1.157.02.42.03.83.03 1.23h.234c.136-.547.317-1.04.542-1.48a5.03 5.03 0 0 1 .747-1.127c.273-.313.566-.552.878-.718.313-.166.625-.25.938-.25.38 0 .689.045.923.133.244.078.434.205.571.38.137.176.23.4.279.674.048.274.073.601.073.982Zm10.312-8.056c.39 0 .786.015 1.187.044.4.03.761.112 1.084.25.322.136.586.346.79.629.206.273.308.66.308 1.157 0 .498-.102.889-.307 1.172a1.895 1.895 0 0 1-.791.615c-.322.137-.684.22-1.084.25-.4.029-.796.043-1.187.043h-3.486v3.985h1.846c.39 0 .78.014 1.171.044.4.02.752.097 1.055.234.313.127.567.327.762.6.195.264.293.635.293 1.114 0 .488-.098.864-.293 1.128-.195.263-.45.464-.762.6a3.352 3.352 0 0 1-1.055.235c-.39.02-.78.03-1.171.03h-1.846v4.218h3.486c.39 0 .786.015 1.187.044.4.03.761.112 1.084.249.322.127.586.332.79.615.206.273.308.654.308 1.143 0 .507-.107.903-.322 1.186a1.851 1.851 0 0 1-.79.63c-.323.137-.684.22-1.085.25-.4.028-.79.043-1.172.043H36.04c-.547 0-.972-.098-1.274-.293a1.739 1.739 0 0 1-.645-.762 3.394 3.394 0 0 1-.249-1.084c-.02-.4-.03-.81-.03-1.23V9.86c0-.42.01-.83.03-1.23.03-.4.112-.757.25-1.07.136-.322.35-.58.644-.776.302-.195.727-.293 1.274-.293h5.742ZM52.77 18.914v4.746c0 .42-.015.83-.044 1.23-.02.401-.103.758-.25 1.07a1.71 1.71 0 0 1-.659.762c-.302.185-.737.278-1.303.278-.547 0-.972-.093-1.275-.278a1.738 1.738 0 0 1-.644-.762 3.242 3.242 0 0 1-.25-1.07c-.019-.4-.029-.81-.029-1.23V9.832c0-.42.01-.83.03-1.23.029-.4.112-.757.249-1.07a1.65 1.65 0 0 1 .644-.747c.303-.195.728-.293 1.275-.293h4.834c1.21.059 2.295.313 3.252.762.41.195.805.44 1.186.732.39.293.738.655 1.04 1.084.313.42.562.923.747 1.51.186.575.279 1.244.279 2.006 0 1.045-.166 1.963-.498 2.754a5.162 5.162 0 0 1-1.421 1.977c-.616.528-1.372.928-2.27 1.202-.89.263-1.895.395-3.018.395h-1.875Zm1.992-3.486c.488-.03.927-.147 1.318-.352.166-.088.327-.2.483-.337.157-.137.298-.303.425-.498.127-.205.225-.444.293-.718.078-.273.117-.585.117-.937 0-.332-.039-.62-.117-.864a2.18 2.18 0 0 0-.278-.645 2.095 2.095 0 0 0-.396-.469 2.754 2.754 0 0 0-.454-.322 3.404 3.404 0 0 0-1.245-.337H52.77v5.479h1.992Zm9.58.205c0-.41.02-.81.058-1.201.05-.391.152-.738.308-1.04.156-.313.38-.562.674-.747.293-.196.688-.293 1.186-.293s.894.097 1.187.293c.293.185.517.434.674.747.156.302.254.649.293 1.04.048.39.073.79.073 1.2v8.087c0 .41-.025.815-.073 1.216-.04.39-.137.742-.293 1.054-.156.303-.381.547-.674.733-.293.185-.689.278-1.187.278-.498 0-.893-.093-1.186-.278a1.87 1.87 0 0 1-.674-.733 3.24 3.24 0 0 1-.308-1.054c-.039-.4-.058-.806-.058-1.216v-8.086Zm4.482-6.914c0 .752-.195 1.313-.586 1.684-.39.362-.937.542-1.64.542-.703 0-1.25-.18-1.64-.542-.392-.37-.587-.932-.587-1.684 0-.781.195-1.348.586-1.7.39-.351.938-.527 1.64-.527.753 0 1.31.176 1.67.528.372.351.557.918.557 1.699Zm10.694 3.633c.244 0 .493.014.747.043.254.03.478.103.674.22.205.117.37.298.498.542.126.244.19.581.19 1.011 0 .4-.064.718-.19.952-.127.225-.293.4-.499.528a1.84 1.84 0 0 1-.673.234c-.254.03-.503.044-.747.044h-.88v7.763c0 .43-.024.845-.073 1.246-.039.39-.141.742-.307 1.054-.156.303-.39.547-.703.733-.303.185-.713.278-1.23.278-.499 0-.894-.093-1.187-.278a1.796 1.796 0 0 1-.645-.733 3.222 3.222 0 0 1-.278-1.054c-.04-.4-.059-.816-.059-1.245v-7.764h-.82c-.273 0-.537-.015-.791-.044a1.83 1.83 0 0 1-.66-.234 1.418 1.418 0 0 1-.453-.528c-.117-.234-.176-.552-.176-.952 0-.43.059-.767.176-1.01.117-.245.268-.426.454-.543.195-.117.415-.19.659-.22.254-.029.517-.043.791-.043h.82c0-.86.04-1.65.117-2.373.079-.723.269-1.338.572-1.846.303-.518.752-.918 1.347-1.201.596-.293 1.412-.44 2.447-.44.44 0 .854.04 1.245.117.39.079.732.2 1.025.367.293.166.523.385.689.659.175.263.263.586.263.967 0 .351-.063.644-.19.878a1.75 1.75 0 0 1-.44.572 1.54 1.54 0 0 1-.586.307 2.088 2.088 0 0 1-.57.088.851.851 0 0 1-.41-.102.914.914 0 0 0-.44-.103.409.409 0 0 0-.323.132 1.178 1.178 0 0 0-.175.352c-.04.146-.064.307-.074.483-.01.176-.014.351-.014.527v.616h.879Zm6.093 20.507c-1.113 0-1.904-.16-2.373-.483-.468-.313-.703-.776-.703-1.392 0-.302.04-.556.117-.761.088-.205.205-.371.352-.498.146-.127.312-.22.498-.279.195-.049.4-.073.615-.073.147 0 .283.005.41.015.127.01.235.014.323.014.185 0 .361-.112.527-.337.176-.214.342-.488.498-.82.166-.332.332-.688.498-1.07.166-.38.332-.732.498-1.054l-.234-.586c-.283-.713-.581-1.46-.894-2.241-.312-.791-.625-1.587-.937-2.388-.303-.81-.606-1.616-.909-2.417-.293-.8-.561-1.577-.805-2.329-.108-.312-.2-.62-.278-.923a4.046 4.046 0 0 1-.103-.893c0-.284.059-.547.176-.791.117-.244.278-.454.483-.63.205-.176.44-.313.703-.41.274-.108.562-.161.864-.161.274 0 .523.058.748.175.234.118.439.279.615.484.185.205.346.44.483.703.137.263.254.542.352.835l1.963 6.181 1.875-6.181c.088-.274.2-.547.337-.82.136-.274.297-.513.483-.718a2.24 2.24 0 0 1 .63-.513c.234-.137.493-.205.776-.205.283 0 .552.054.806.161.264.107.488.259.674.454.195.186.346.41.454.674.117.264.176.547.176.85 0 .293-.04.586-.118.878a7.065 7.065 0 0 1-.263.85l-3.516 9.317c-.205.527-.43 1.074-.674 1.64a20.28 20.28 0 0 1-.776 1.685 17.052 17.052 0 0 1-.908 1.553 8.738 8.738 0 0 1-1.026 1.289 4.599 4.599 0 0 1-1.157.879c-.4.224-.82.336-1.26.336Z"
    />
    <Rect width={5} height={5} x={64} y={6} fill="#FF9392" rx={2} />
  </Svg>
)
    }
