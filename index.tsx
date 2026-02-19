import { XiaoBoard } from "@tscircuit/common"

export default () => (
  <board 
    routingDisabled 
    schMaxTraceDistance={5}
  >
    <XiaoBoard key="rp2040-zero-breakout" />
  </board>
)
