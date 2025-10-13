import React from "react"

function Loading() {
  return (
    <div className="flex items-center h-screen justify-center">
      <svg viewBox="0 0 200 200" className="size-20">
        <circle fill="#5C5C5C" stroke="#5C5C5C" r={15} cx={40} cy={65}>
          <animate
            attributeName="cy"
            calcMode="spline"
            dur={2}
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={-0.4}
          />
        </circle>
        <circle
          fill="#5C5C5C"
          stroke="#5C5C5C"
          strokeWidth={15}
          r={15}
          cx={100}
          cy={65}
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur={2}
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={-0.2}
          />
        </circle>
        <circle
          fill="#5C5C5C"
          stroke="#5C5C5C"
          strokeWidth={15}
          r={15}
          cx={160}
          cy={65}
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur={2}
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={0}
          />
        </circle>
      </svg>
    </div>
  )
}

const MemoLoading = React.memo(Loading)
export default MemoLoading
