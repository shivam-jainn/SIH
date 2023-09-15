import React from "react";

const CopyPaste1 = (props) => {
  return (
    <>
      <div class="relative text-center lg:px-28 -mt-28 sm:-mt-16">
        <div class="relative hidden mx-auto lg:mt-24 lg:flex lg:mx-auto mt-28 items-center justify-center">
          <div class="mx-auto lg:scale-[0.78]">
            <div class="absolute whitespace-nowrap text-left rounded-2xl shadow-tremor ring-tremor overflow-hidden max-w-lg bg-white p-2 opacity-70">
              <div class="relative flex text-center">
                <div class="flex pl-3.5 pt-3">
                  <svg
                    class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <svg
                    class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <svg
                    class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                </div>
                <span class="absolute inset-x-0 top-2 text-xs text-slate-500">
                  IOT_Component.tsx
                </span>
              </div>
              <div class="mt-5 space-y-1.5 px-5 pb-10">
                <p class="mt-2 font-mono text-xs font-normal tracking-wide text-slate-600">
                  {" "}
                </p>
                <p class="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Card</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">Total Budget</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Metric</span>
                  <span class="text-slate-500">=</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">₹ 71,465</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Metric</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="ml-2 text-violet-400">
                    className<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"mt-3"</span>
                    </span>
                  </span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Bold</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">32%</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Bold</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">of annual target</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">₹ 223,328</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">ProgressBar</span>
                  <span class="ml-2 text-violet-400">
                    value<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">{32} </span>
                    </span>
                  </span>
                  <span class="ml-2 text-violet-400">
                    className<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"mt-3"</span>
                    </span>
                  </span>
                  <span class="ml-1 text-slate-500">/&gt;</span>
                </p>
                <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Card</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
              </div>
            </div>
            <div class="max-w-sm sm:px-none relative -top-36 right-64">
              <div class="mt-10 w-full rounded-xl border-slate-500/10 border p-0.5 shadow-tremor">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg blur-2xl opacity-20"></div>
                <div class="rounded-[0.62rem] bg-white bg-opacity-50 p-2">
                  <div class="rounded-xl">
                    <div class="relative bg-white rounded-lg w-full h-full p-6 border border-slate-200 shadow-tremor">
                      <div class="group transition-all p-3 border-dashed text-left rounded-lg border border-slate-300 shadow-tremor -translate-x-14 -translate-y-4 bg-white bg-opacity-60">
                        <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                          Total Budget
                        </p>
                        <p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                          ₹ 71,465
                        </p>
                      </div>
                      <div class="group border p-3 border-dashed rounded-lg border-slate-300 bg-white bg-opacity-70">
                        <div class="tremor-Flex-root flex w-full flex-row justify-between items-center mt-3">
                          <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            <b class="text-inherit font-bold">32%</b> of annual
                            target
                          </p>
                          <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            ₹ 223,328
                          </p>
                        </div>
                        <div class="tremor-ProgressBar-root flex items-center w-full mt-3">
                          <div class="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full rounded-tremor-full bg-tremor-brand-faint dark:bg-dark-tremor-brand-faint h-2">
                            <div
                              class="tremor-ProgressBar-progressBar flex-col h-full rounded-tremor-full bg-tremor-brand dark:bg-dark-tremor-brand"
                              // style="width: 32%; transition: all 1s ease 0s;"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[40rem] sm:px-none relative -top-[23rem] left-80">
              <div class="mt-10 w-full rounded-xl border-slate-500/10 border p-0.5 shadow-tremor">
                <div class="absolute -inset-0.5 bg-gradient-to-b from-cyan-600 to-blue-600 rounded-lg blur-2xl opacity-20"></div>
                <div class="rounded-[0.62rem] bg-white bg-opacity-50 p-2">
                  <div class="group rounded-xl shadow-tremor">
                    <div class="relative w-full mx-auto text-left rounded-lg ring-1 bg-white p-6 ring-tremor">
                      <p class="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                        Productivity over time
                      </p>
                      <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        Year: 2022 • Last update: Fri Sep 15 2023
                      </p>
                      <div class="w-full h-64 mt-2">
                        <div
                          class="recharts-responsive-container h-full w-full"
                          // style="width: 100%; height: 100%; min-width: 0px;"
                          width="570"
                          height="256"
                        >
                          <div
                            class="recharts-wrapper"
                            role="region"
                            // style="position: relative; cursor: default; width: 570px; height: 256px;"
                          >
                            <svg
                              class="recharts-surface"
                              width="570"
                              height="256"
                              viewBox="0 0 570 256"
                            >
                              <title></title>
                              <desc></desc>
                              <defs>
                                <clipPath id="recharts25-clip">
                                  <rect
                                    x="65"
                                    y="36.20001220703125"
                                    height="184.79998779296875"
                                    width="500"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <g class="recharts-cartesian-grid">
                                <g class="recharts-cartesian-grid-horizontal">
                                  <line
                                    class="stroke-1 stroke-tremor-content-subtle dark:stroke-dark-tremor-content-subtle"
                                    stroke-dasharray="3 3"
                                    stroke="#ccc"
                                    fill="none"
                                    x="65"
                                    y="36.20001220703125"
                                    width="500"
                                    height="184.79998779296875"
                                    offset="[object Object]"
                                    x1="65"
                                    y1="221"
                                    x2="565"
                                    y2="221"
                                  ></line>
                                  <line
                                    class="stroke-1 stroke-tremor-content-subtle dark:stroke-dark-tremor-content-subtle"
                                    stroke-dasharray="3 3"
                                    stroke="#ccc"
                                    fill="none"
                                    x="65"
                                    y="36.20001220703125"
                                    width="500"
                                    height="184.79998779296875"
                                    offset="[object Object]"
                                    x1="65"
                                    y1="174.8000030517578"
                                    x2="565"
                                    y2="174.8000030517578"
                                  ></line>
                                  <line
                                    class="stroke-1 stroke-tremor-content-subtle dark:stroke-dark-tremor-content-subtle"
                                    stroke-dasharray="3 3"
                                    stroke="#ccc"
                                    fill="none"
                                    x="65"
                                    y="36.20001220703125"
                                    width="500"
                                    height="184.79998779296875"
                                    offset="[object Object]"
                                    x1="65"
                                    y1="128.60000610351562"
                                    x2="565"
                                    y2="128.60000610351562"
                                  ></line>
                                  <line
                                    class="stroke-1 stroke-tremor-content-subtle dark:stroke-dark-tremor-content-subtle"
                                    stroke-dasharray="3 3"
                                    stroke="#ccc"
                                    fill="none"
                                    x="65"
                                    y="36.20001220703125"
                                    width="500"
                                    height="184.79998779296875"
                                    offset="[object Object]"
                                    x1="65"
                                    y1="82.40000915527344"
                                    x2="565"
                                    y2="82.40000915527344"
                                  ></line>
                                  <line
                                    class="stroke-1 stroke-tremor-content-subtle dark:stroke-dark-tremor-content-subtle"
                                    stroke-dasharray="3 3"
                                    stroke="#ccc"
                                    fill="none"
                                    x="65"
                                    y="36.20001220703125"
                                    width="500"
                                    height="184.79998779296875"
                                    offset="[object Object]"
                                    x1="65"
                                    y1="36.20001220703125"
                                    x2="565"
                                    y2="36.20001220703125"
                                  ></line>
                                </g>
                              </g>
                              <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis text-tremor-label fill-tremor-content dark:fill-dark-tremor-content">
                                <g class="recharts-cartesian-axis-ticks">
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="75.00000000000003"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="75.00000000000003" dy="0.71em">
                                        Jan
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="118.63636363636365"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="118.63636363636365" dy="0.71em">
                                        Feb
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="162.2727272727273"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="162.2727272727273" dy="0.71em">
                                        Mar
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="205.90909090909093"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="205.90909090909093" dy="0.71em">
                                        Apr
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="249.54545454545456"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="249.54545454545456" dy="0.71em">
                                        May
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="293.1818181818182"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="293.1818181818182" dy="0.71em">
                                        Jun
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="336.81818181818187"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="336.81818181818187" dy="0.71em">
                                        Jul
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="380.4545454545455"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="380.4545454545455" dy="0.71em">
                                        Aug
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="424.0909090909091"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="424.0909090909091" dy="0.71em">
                                        Sep
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="467.72727272727275"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="467.72727272727275" dy="0.71em">
                                        Oct
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="511.3636363636364"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="511.3636363636364" dy="0.71em">
                                        Nov
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      stroke="none"
                                      orientation="bottom"
                                      width="500"
                                      height="30"
                                      transform="translate(0, 6)"
                                      x="555"
                                      y="229"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="middle"
                                      fill=""
                                    >
                                      <tspan x="555" dy="0.71em">
                                        Dec
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                              <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis text-tremor-label fill-tremor-content dark:fill-dark-tremor-content">
                                <g class="recharts-cartesian-axis-ticks">
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      width="60"
                                      stroke="none"
                                      orientation="left"
                                      height="184.79998779296875"
                                      transform="translate(-3, 0)"
                                      x="57"
                                      y="221"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="end"
                                      fill=""
                                    >
                                      <tspan x="57" dy="0.355em">
                                        ₹ 0
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      width="60"
                                      stroke="none"
                                      orientation="left"
                                      height="184.79998779296875"
                                      transform="translate(-3, 0)"
                                      x="57"
                                      y="174.8000030517578"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="end"
                                      fill=""
                                    >
                                      <tspan x="57" dy="0.355em">
                                        ₹ 1,000
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      width="60"
                                      stroke="none"
                                      orientation="left"
                                      height="184.79998779296875"
                                      transform="translate(-3, 0)"
                                      x="57"
                                      y="128.60000610351562"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="end"
                                      fill=""
                                    >
                                      <tspan x="57" dy="0.355em">
                                        ₹ 2,000
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      width="60"
                                      stroke="none"
                                      orientation="left"
                                      height="184.79998779296875"
                                      transform="translate(-3, 0)"
                                      x="57"
                                      y="82.40000915527344"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="end"
                                      fill=""
                                    >
                                      <tspan x="57" dy="0.355em">
                                        ₹ 3,000
                                      </tspan>
                                    </text>
                                  </g>
                                  <g class="recharts-layer recharts-cartesian-axis-tick">
                                    <text
                                      width="60"
                                      stroke="none"
                                      orientation="left"
                                      height="184.79998779296875"
                                      transform="translate(-3, 0)"
                                      x="57"
                                      y="36.20001220703125"
                                      class="recharts-text recharts-cartesian-axis-tick-value"
                                      text-anchor="end"
                                      fill=""
                                    >
                                      <tspan x="57" dy="0.355em">
                                        ₹ 4,000
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  class="text-indigo-500"
                                  id="indigo"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stop-color="currentColor"
                                    stop-opacity="0.4"
                                  ></stop>
                                  <stop
                                    offset="95%"
                                    stop-color="currentColor"
                                    stop-opacity="0"
                                  ></stop>
                                </linearGradient>
                              </defs>
                              <defs>
                                <linearGradient
                                  class="text-cyan-500"
                                  id="cyan"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stop-color="currentColor"
                                    stop-opacity="0.4"
                                  ></stop>
                                  <stop
                                    offset="95%"
                                    stop-color="currentColor"
                                    stop-opacity="0"
                                  ></stop>
                                </linearGradient>
                              </defs>
                              <g class="recharts-layer recharts-area stroke-indigo-500">
                                <g class="recharts-layer">
                                  <path
                                    class="recharts-curve recharts-area-area"
                                    name="SemiAnalysis"
                                    fill="url(#indigo)"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    fill-opacity="0.6"
                                    width="500"
                                    height="184.79998779296875"
                                    stroke="none"
                                    d="M75,87.482L118.636,93.673L162.273,67.524L205.909,60.686L249.545,60.455L293.182,76.44L336.818,59.762L380.455,86.881L424.091,98.893L467.727,89.931L511.364,84.525L555,71.358L555,221L511.364,221L467.727,221L424.091,221L380.455,221L336.818,221L293.182,221L249.545,221L205.909,221L162.273,221L118.636,221L75,221Z"
                                  ></path>
                                  <path
                                    class="recharts-curve recharts-area-curve"
                                    name="SemiAnalysis"
                                    stroke=""
                                    fill="none"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    fill-opacity="0.6"
                                    width="500"
                                    height="184.79998779296875"
                                    d="M75,87.482L118.636,93.673L162.273,67.524L205.909,60.686L249.545,60.455L293.182,76.44L336.818,59.762L380.455,86.881L424.091,98.893L467.727,89.931L511.364,84.525L555,71.358"
                                  ></path>
                                </g>
                              </g>
                              <g class="recharts-layer recharts-area stroke-cyan-500">
                                <g class="recharts-layer">
                                  <path
                                    class="recharts-curve recharts-area-area"
                                    name="The Pragmatic Engineer"
                                    fill="url(#cyan)"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    fill-opacity="0.6"
                                    width="500"
                                    height="184.79998779296875"
                                    stroke="none"
                                    d="M75,112.984L118.636,123.841L162.273,119.637L205.909,123.61L249.545,137.286L293.182,141.259L336.818,129.432L380.455,128.046L424.091,112.8L467.727,106.747L511.364,43.222L555,48.397L555,221L511.364,221L467.727,221L424.091,221L380.455,221L336.818,221L293.182,221L249.545,221L205.909,221L162.273,221L118.636,221L75,221Z"
                                  ></path>
                                  <path
                                    class="recharts-curve recharts-area-curve"
                                    name="The Pragmatic Engineer"
                                    stroke=""
                                    fill="none"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    fill-opacity="0.6"
                                    width="500"
                                    height="184.79998779296875"
                                    d="M75,112.984L118.636,123.841L162.273,119.637L205.909,123.61L249.545,137.286L293.182,141.259L336.818,129.432L380.455,128.046L424.091,112.8L467.727,106.747L511.364,43.222L555,48.397"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                            <div
                              class="recharts-legend-wrapper"
                              // style="position: absolute; width: 560px; height: 40px; left: 5px; top: 5px;"
                            >
                              <div class="flex items-center justify-end">
                                <ol class="tremor-Legend-root flex flex-wrap overflow-hidden truncate">
                                  <li class="tremor-Legend-legendItem inline-flex items-center truncate text-tremor-content dark:text-dark-tremor-content mr-2.5">
                                    <svg
                                      class="flex-none text-indigo-500 h-2 w-2 mr-1.5"
                                      fill="currentColor"
                                      viewBox="0 0 8 8"
                                    >
                                      <circle cx="4" cy="4" r="4"></circle>
                                    </svg>
                                    <p class="whitespace-nowrap truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                      SemiAnalysis
                                    </p>
                                  </li>
                                  <li class="tremor-Legend-legendItem inline-flex items-center truncate text-tremor-content dark:text-dark-tremor-content mr-2.5">
                                    <svg
                                      class="flex-none text-cyan-500 h-2 w-2 mr-1.5"
                                      fill="currentColor"
                                      viewBox="0 0 8 8"
                                    >
                                      <circle cx="4" cy="4" r="4"></circle>
                                    </svg>
                                    <p class="whitespace-nowrap truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                      The Pragmatic Engineer
                                    </p>
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative lg:hidden -mt-6">
          <div class="mt-6 flex justify-center scale-[0.80]">
            <div class="text-left rounded-2xl shadow-tremor ring-tremor overflow-hidden w-full md:max-w-xl bg-white p-2 opacity-70">
              <div class="relative flex text-center">
                <div class="flex pl-3.5 pt-3">
                  <svg
                    class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <svg
                    class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <svg
                    class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                </div>
                <span class="absolute inset-x-0 top-2 text-xs text-slate-500">
                  IOT_Component.jsx
                </span>
              </div>
              <div class="mt-5 space-y-1.5 px-4 pb-10">
                <p class="mt-2 font-mono text-xs font-normal tracking-wide text-slate-600">
                  {" "}
                </p>
                <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Card</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="ml-2 text-violet-400">
                    alignItems<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"start"</span>
                    </span>
                  </span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Block</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-9 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">Total Budget</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-9 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Metric</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">₹ 71,465</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Metric</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Block</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">BadgeDelta</span>
                  <span class="ml-2 text-violet-400">
                    text<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"12%"</span>
                    </span>
                  </span>
                  <span class="ml-2 text-violet-400">
                    deltaType<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"increase"</span>
                    </span>
                  </span>
                  <span class="text-slate-500">/&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="ml-2 text-violet-400">
                    className<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"mt-3"</span>
                    </span>
                  </span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Bold</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">32%</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Bold</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">of annual target</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">₹ 223,328</span>
                  </span>
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Text</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Flex</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
                <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;</span>
                  <span class="text-pink-400">ProgressBar</span>
                  <span class="ml-2 text-violet-400">
                    value<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">{32} </span>
                    </span>
                  </span>
                  <span class="ml-2 text-violet-400">
                    className<span class="text-slate-500">=</span>
                    <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span class="relative text-blue-400">"mt-3"</span>
                    </span>
                  </span>
                  <span class="ml-1 text-slate-500">/&gt;</span>
                </p>
                <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span class="text-slate-500">&lt;/</span>
                  <span class="text-pink-400">Card</span>
                  <span class="text-slate-500">&gt;</span>
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 -mt-72 flex justify-center">
            <div class="relative w-full md:max-w-xl rounded-xl border-slate-500/10 border p-0.5 shadow-tremor">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg blur-2xl opacity-20"></div>
              <div class="rounded-[0.62rem] bg-white bg-opacity-50 p-2">
                <div class="rounded-xl">
                  <div class="relative bg-white rounded-lg w-full h-full p-6 border border-slate-200 shadow-tremor">
                    <div class="group transition-all p-3 border-dashed text-left rounded-lg border border-slate-300 shadow-tremor -translate-x-14 -translate-y-4 bg-white bg-opacity-60">
                      <div class="tremor-Flex-root flex w-full flex-row justify-between items-start">
                        <div>
                          <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            Total Budget
                          </p>
                          <p class="font-semibold text-tremor-metric text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                            ₹&nbsp;71,465
                          </p>
                        </div>
                        <span class="tremor-BadgeDelta-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-tremor-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-sm">
                          <svg
                            class="tremor-BadgeDelta-icon shrink-0 -ml-1 mr-1.5 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                            ></path>
                          </svg>
                          <p class="tremor-BadgeDelta-text text-sm whitespace-nowrap">
                            23.5%
                          </p>
                        </span>
                      </div>
                    </div>
                    <div class="group border p-3 border-dashed rounded-lg border-slate-300 bg-white bg-opacity-70">
                      <div class="tremor-Flex-root flex w-full flex-row justify-between items-center mt-3">
                        <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                          <b class="text-inherit font-bold">32%</b> of target
                        </p>
                        <p class="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                          ₹ 223,328
                        </p>
                      </div>
                      <div class="tremor-ProgressBar-root flex items-center w-full mt-3">
                        <div class="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full rounded-tremor-full bg-tremor-brand-faint dark:bg-dark-tremor-brand-faint h-2">
                          <div
                            class="tremor-ProgressBar-progressBar flex-col h-full rounded-tremor-full bg-tremor-brand dark:bg-dark-tremor-brand"
                            // style="width: 32%; transition: all 1s ease 0s;"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 lg:-mt-72 sm:px-6 lg:px-8">
          <p class="mt-10 text-slate-400">Built on top of:</p>
          <div class="mt-4 sm:mt-6 flex space-x-5 justify-center items-center scale-[0.8] sm:scale-100">
            <div>
              <svg
                width="88"
                height="28"
                viewBox="0 0 88 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9468 13.7948C30.9468 11.7718 28.4401 9.85471 24.5968 8.66584C25.4837 4.70708 25.0895 1.55749 23.3527 0.54913C22.9524 0.312601 22.4843 0.20056 21.9731 0.20056V1.58862C22.2564 1.58862 22.4843 1.64464 22.6752 1.75045C23.5128 2.23596 23.8762 4.08463 23.5929 6.46238C23.5251 7.04748 23.4143 7.6637 23.2788 8.29237C22.0716 7.9936 20.7536 7.76329 19.3678 7.6139C18.5363 6.46238 17.674 5.41666 16.8056 4.50167C18.8135 2.61565 20.6981 1.58239 21.9792 1.58239V0.194336C20.2855 0.194336 18.0682 1.41433 15.8263 3.53065C13.5844 1.42678 11.3672 0.219234 9.67342 0.219234V1.60729C10.9483 1.60729 12.8392 2.63433 14.847 4.50789C13.9848 5.42289 13.1225 6.46238 12.3033 7.6139C10.9114 7.76329 9.59336 7.9936 8.38618 8.29859C8.24452 7.67615 8.13982 7.07237 8.06591 6.4935C7.77643 4.11575 8.13366 2.26708 8.96513 1.77535C9.1499 1.66331 9.39011 1.61351 9.67342 1.61351V0.225458C9.15606 0.225458 8.68797 0.337499 8.28148 0.574028C6.55078 1.58239 6.16276 4.72575 7.05582 8.67206C3.22489 9.86716 0.730469 11.7781 0.730469 13.7948C0.730469 15.8178 3.23721 17.7349 7.08046 18.9238C6.19355 22.8825 6.58773 26.0321 8.32459 27.0405C8.72493 27.277 9.19302 27.389 9.71038 27.389C11.4041 27.389 13.6214 26.169 15.8633 24.0527C18.1052 26.1566 20.3224 27.3641 22.0162 27.3641C22.5335 27.3641 23.0016 27.2521 23.4081 27.0156C25.1388 26.0072 25.5268 22.8639 24.6338 18.9175C28.4524 17.7287 30.9468 15.8115 30.9468 13.7948ZM22.9277 9.64308C22.6998 10.446 22.4165 11.2739 22.0962 12.1017C21.8437 11.6038 21.5789 11.1058 21.2894 10.6079C21.0061 10.1099 20.7043 9.62441 20.4025 9.15135C21.2771 9.28206 22.1209 9.4439 22.9277 9.64308ZM20.1069 16.2721C19.6265 17.1124 19.1337 17.9092 18.6225 18.6499C17.7048 18.7308 16.7748 18.7744 15.8386 18.7744C14.9086 18.7744 13.9786 18.7308 13.0671 18.6561C12.5559 17.9154 12.057 17.1249 11.5766 16.2908C11.1085 15.4754 10.6835 14.6476 10.2955 13.8135C10.6774 12.9794 11.1085 12.1453 11.5704 11.3299C12.0508 10.4896 12.5435 9.69287 13.0547 8.95216C13.9724 8.87125 14.9025 8.82767 15.8386 8.82767C16.7687 8.82767 17.6987 8.87125 18.6102 8.94594C19.1214 9.68665 19.6203 10.4772 20.1007 11.3112C20.5688 12.1266 20.9938 12.9545 21.3818 13.7886C20.9938 14.6227 20.5688 15.4567 20.1069 16.2721ZM22.0962 15.463C22.4288 16.297 22.7122 17.1311 22.9462 17.9403C22.1394 18.1395 21.2894 18.3075 20.4087 18.4383C20.7105 17.959 21.0123 17.4672 21.2956 16.9631C21.5789 16.4651 21.8437 15.9609 22.0962 15.463ZM15.851 22.1045C15.2782 21.5069 14.7054 20.8409 14.1387 20.1126C14.6931 20.1375 15.2597 20.1562 15.8325 20.1562C16.4114 20.1562 16.9842 20.1438 17.5447 20.1126C16.9904 20.8409 16.4176 21.5069 15.851 22.1045ZM11.2686 18.4383C10.394 18.3075 9.55024 18.1457 8.7434 17.9465C8.97129 17.1436 9.25461 16.3157 9.57488 15.4879C9.8274 15.9858 10.0922 16.4838 10.3817 16.9817C10.6712 17.4797 10.9668 17.9652 11.2686 18.4383ZM15.8202 5.48513C16.393 6.08268 16.9657 6.7487 17.5324 7.47696C16.9781 7.45207 16.4114 7.43339 15.8386 7.43339C15.2597 7.43339 14.6869 7.44584 14.1264 7.47696C14.6807 6.7487 15.2535 6.08268 15.8202 5.48513ZM11.2625 9.15135C10.9607 9.63063 10.6589 10.1224 10.3756 10.6265C10.0922 11.1245 9.8274 11.6225 9.57488 12.1204C9.24229 11.2863 8.95897 10.4523 8.72493 9.64308C9.53177 9.45012 10.3817 9.28206 11.2625 9.15135ZM5.68851 16.9444C3.50821 16.0045 2.09778 14.772 2.09778 13.7948C2.09778 12.8176 3.50821 11.5789 5.68851 10.6452C6.21819 10.4149 6.79714 10.2095 7.39457 10.0165C7.74564 11.2365 8.20757 12.5063 8.78036 13.8072C8.21373 15.1019 7.75796 16.3655 7.41305 17.5793C6.8033 17.3863 6.22435 17.1747 5.68851 16.9444ZM9.00209 25.8391C8.16445 25.3536 7.80107 23.505 8.08439 21.1272C8.15214 20.5421 8.263 19.9259 8.3985 19.2972C9.60567 19.596 10.9237 19.8263 12.3095 19.9757C13.141 21.1272 14.0032 22.1729 14.8717 23.0879C12.8638 24.9739 10.9791 26.0072 9.69806 26.0072C9.4209 26.001 9.18686 25.945 9.00209 25.8391ZM23.6114 21.0961C23.9009 23.4738 23.5436 25.3225 22.7122 25.8142C22.5274 25.9263 22.2872 25.9761 22.0039 25.9761C20.7289 25.9761 18.8381 24.949 16.8303 23.0755C17.6925 22.1605 18.5548 21.121 19.3739 19.9695C20.7659 19.8201 22.0839 19.5898 23.2911 19.2848C23.4328 19.9135 23.5436 20.5172 23.6114 21.0961ZM25.9826 16.9444C25.4529 17.1747 24.874 17.3801 24.2766 17.5731C23.9255 16.3531 23.4636 15.0833 22.8908 13.7824C23.4574 12.4877 23.9132 11.2241 24.2581 10.0103C24.8678 10.2033 25.4468 10.4149 25.9888 10.6452C28.1691 11.5851 29.5795 12.8176 29.5795 13.7948C29.5733 14.772 28.1629 16.0107 25.9826 16.9444Z"
                  fill="#94A3B8"
                ></path>
                <path
                  d="M15.8323 16.6384C17.3868 16.6384 18.647 15.3648 18.647 13.7938C18.647 12.2228 17.3868 10.9492 15.8323 10.9492C14.2778 10.9492 13.0176 12.2228 13.0176 13.7938C13.0176 15.3648 14.2778 16.6384 15.8323 16.6384Z"
                  fill="#94A3B8"
                ></path>
                <path
                  d="M40.8749 20.1445V7.57161H45.5897C46.5556 7.57161 47.366 7.73941 48.0208 8.07502C48.6797 8.41062 49.177 8.88129 49.5126 9.48702C49.8523 10.0887 50.0222 10.7906 50.0222 11.5927C50.0222 12.399 49.8503 13.0989 49.5065 13.6923C49.1668 14.2817 48.6654 14.738 48.0024 15.0613C47.3394 15.3806 46.5249 15.5402 45.559 15.5402H42.2009V13.6493H45.2521C45.8169 13.6493 46.2793 13.5716 46.6395 13.4161C46.9997 13.2564 47.2657 13.0252 47.4376 12.7223C47.6136 12.4154 47.7016 12.0388 47.7016 11.5927C47.7016 11.1466 47.6136 10.766 47.4376 10.4509C47.2616 10.1316 46.9935 9.89015 46.6334 9.72644C46.2732 9.55864 45.8087 9.47474 45.2398 9.47474H43.1525V20.1445H40.8749ZM47.3701 14.4474L50.4826 20.1445H47.941L44.8837 14.4474H47.3701ZM56.06 20.3287C55.1146 20.3287 54.2981 20.1323 53.6105 19.7393C52.927 19.3424 52.4011 18.7816 52.0327 18.0572C51.6644 17.3287 51.4802 16.4713 51.4802 15.4849C51.4802 14.515 51.6644 13.6637 52.0327 12.9311C52.4052 12.1944 52.9249 11.6214 53.5921 11.2121C54.2592 10.7987 55.0429 10.5921 55.9433 10.5921C56.5245 10.5921 57.0729 10.6862 57.5886 10.8745C58.1084 11.0586 58.5668 11.3451 58.9638 11.7339C59.3649 12.1227 59.68 12.618 59.9092 13.2196C60.1384 13.8171 60.253 14.5293 60.253 15.356V16.0375H52.5239V14.5395H58.1227C58.1186 14.1139 58.0266 13.7353 57.8465 13.4038C57.6664 13.0682 57.4147 12.8042 57.0914 12.6118C56.7721 12.4195 56.3997 12.3233 55.974 12.3233C55.5197 12.3233 55.1207 12.4338 54.7769 12.6548C54.4331 12.8717 54.165 13.1582 53.9727 13.5143C53.7844 13.8663 53.6882 14.253 53.6841 14.6746V15.9822C53.6841 16.5306 53.7844 17.0013 53.985 17.3942C54.1855 17.783 54.4659 18.0818 54.826 18.2905C55.1862 18.4952 55.6077 18.5975 56.0907 18.5975C56.414 18.5975 56.7066 18.5525 56.9686 18.4624C57.2305 18.3683 57.4577 18.2312 57.65 18.0511C57.8424 17.871 57.9877 17.648 58.0859 17.3819L60.1609 17.6152C60.0299 18.1636 59.7803 18.6425 59.4119 19.0518C59.0477 19.4569 58.5811 19.7721 58.0122 19.9972C57.4433 20.2182 56.7926 20.3287 56.06 20.3287ZM64.8466 20.3348C64.2491 20.3348 63.7109 20.2284 63.232 20.0156C62.7573 19.7987 62.3807 19.4795 62.1024 19.0579C61.8282 18.6364 61.6911 18.1166 61.6911 17.4986C61.6911 16.9665 61.7893 16.5265 61.9858 16.1787C62.1822 15.8308 62.4503 15.5525 62.79 15.3437C63.1297 15.135 63.5124 14.9774 63.938 14.871C64.3678 14.7605 64.8118 14.6807 65.2702 14.6316C65.8227 14.5743 66.2709 14.5231 66.6147 14.4781C66.9585 14.429 67.2081 14.3553 67.3636 14.2571C67.5233 14.1548 67.6031 13.9972 67.6031 13.7844V13.7476C67.6031 13.2851 67.466 12.927 67.1917 12.6732C66.9175 12.4195 66.5226 12.2926 66.0069 12.2926C65.4626 12.2926 65.0308 12.4113 64.7115 12.6487C64.3964 12.886 64.1836 13.1664 64.0731 13.4897L61.998 13.195C62.1618 12.6221 62.4319 12.1432 62.8084 11.7585C63.1849 11.3697 63.6454 11.0791 64.1897 10.8867C64.7341 10.6903 65.3357 10.5921 65.9946 10.5921C66.4489 10.5921 66.9012 10.6453 67.3514 10.7517C67.8016 10.8581 68.2129 11.0341 68.5853 11.2796C68.9578 11.5211 69.2565 11.8506 69.4816 12.268C69.7108 12.6855 69.8254 13.2073 69.8254 13.8335V20.1445H67.689V18.8492H67.6153C67.4803 19.1111 67.29 19.3567 67.0444 19.5859C66.8029 19.811 66.498 19.9931 66.1297 20.1323C65.7654 20.2673 65.3377 20.3348 64.8466 20.3348ZM65.4237 18.7018C65.8698 18.7018 66.2566 18.6138 66.584 18.4379C66.9114 18.2578 67.1631 18.0204 67.3391 17.7257C67.5192 17.431 67.6092 17.1098 67.6092 16.7619V15.6507C67.5396 15.708 67.4209 15.7612 67.2531 15.8103C67.0894 15.8594 66.9053 15.9024 66.7006 15.9392C66.496 15.9761 66.2934 16.0088 66.0928 16.0375C65.8923 16.0661 65.7184 16.0907 65.571 16.1111C65.2395 16.1561 64.9428 16.2298 64.6808 16.3321C64.4189 16.4345 64.2122 16.5777 64.0608 16.7619C63.9094 16.942 63.8336 17.1752 63.8336 17.4617C63.8336 17.871 63.983 18.18 64.2818 18.3887C64.5806 18.5975 64.9612 18.7018 65.4237 18.7018ZM76.1733 20.3287C75.2319 20.3287 74.4236 20.122 73.7483 19.7087C73.0771 19.2953 72.5594 18.7243 72.1951 17.9958C71.835 17.2632 71.6549 16.4201 71.6549 15.4665C71.6549 14.5088 71.8391 13.6637 72.2074 12.9311C72.5758 12.1944 73.0955 11.6214 73.7667 11.2121C74.442 10.7987 75.2401 10.5921 76.161 10.5921C76.9263 10.5921 77.6037 10.7333 78.1931 11.0157C78.7865 11.294 79.2592 11.6889 79.6112 12.2005C79.9632 12.708 80.1637 13.3015 80.2128 13.9809H78.0887C78.0027 13.5266 77.7981 13.148 77.4748 12.8451C77.1555 12.5382 76.7278 12.3847 76.1917 12.3847C75.7374 12.3847 75.3384 12.5075 74.9946 12.753C74.6508 12.9945 74.3827 13.3424 74.1903 13.7967C74.0021 14.251 73.9079 14.7953 73.9079 15.4297C73.9079 16.0722 74.0021 16.6248 74.1903 17.0872C74.3786 17.5456 74.6426 17.8997 74.9823 18.1493C75.3261 18.3949 75.7292 18.5177 76.1917 18.5177C76.5191 18.5177 76.8118 18.4563 77.0696 18.3335C77.3315 18.2066 77.5505 18.0245 77.7265 17.7871C77.9025 17.5497 78.0232 17.2612 78.0887 16.9215H80.2128C80.1596 17.5886 79.9632 18.18 79.6235 18.6957C79.2838 19.2073 78.8213 19.6084 78.236 19.899C77.6508 20.1855 76.9632 20.3287 76.1733 20.3287ZM86.7464 10.7148V12.4338H81.3255V10.7148H86.7464ZM82.6639 8.45564H84.8862V17.3083C84.8862 17.607 84.9312 17.8362 85.0213 17.9958C85.1154 18.1514 85.2382 18.2578 85.3896 18.3151C85.5411 18.3724 85.7089 18.401 85.893 18.401C86.0322 18.401 86.1591 18.3908 86.2737 18.3703C86.3924 18.3499 86.4824 18.3314 86.5438 18.3151L86.9183 20.0524C86.7996 20.0934 86.6297 20.1384 86.4087 20.1875C86.1918 20.2366 85.9258 20.2653 85.6106 20.2735C85.054 20.2898 84.5527 20.2059 84.1066 20.0217C83.6604 19.8335 83.3064 19.5429 83.0445 19.15C82.7866 18.7571 82.6598 18.266 82.6639 17.6766V8.45564Z"
                  fill="#94A3B8"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="143"
                height="19"
                viewBox="0 0 143 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7206 0.676758C10.7948 0.676758 8.34188 2.62781 7.36 6.52992C8.83224 4.57886 10.5496 3.84736 12.5122 4.33484C13.632 4.6129 14.4327 5.42055 15.3182 6.31473C16.7616 7.77081 18.4323 9.45592 22.0806 9.45592C26.0058 9.45592 28.4593 7.50487 29.4406 3.60334C27.9689 5.55439 26.2515 6.28589 24.2889 5.79784C23.1686 5.51978 22.3679 4.71213 21.4823 3.81852C20.039 2.36129 18.3689 0.676758 14.7206 0.676758ZM7.36 9.45592C3.43482 9.45592 0.981295 11.407 0 15.3091C1.47223 13.358 3.18964 12.6265 5.15166 13.114C6.27198 13.3921 7.07271 14.1997 7.95824 15.0939C9.40163 16.55 11.0717 18.2351 14.7206 18.2351C18.6458 18.2351 21.0993 16.2846 22.0806 12.3825C20.6084 14.3336 18.8909 15.0651 16.9284 14.5776C15.8086 14.2989 15.0079 13.4913 14.1223 12.5977C12.679 11.1416 11.0083 9.45592 7.36 9.45592Z"
                  fill="#94A3B8"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.159 8.07574H41.5901V13.018C41.5901 14.3362 42.4601 14.3154 44.159 14.2329V16.2307C40.7196 16.6426 39.3523 15.6953 39.3523 13.018V8.07574H37.4463V5.93374H39.3523V3.16811L41.5901 2.50872V5.93374H44.159V8.07574ZM53.9512 5.93374H56.1884V16.2307H53.9512V14.7481C53.1637 15.839 51.9413 16.4984 50.3254 16.4984C47.5079 16.4984 45.1668 14.1302 45.1668 11.0819C45.1668 8.01401 47.5079 5.66606 50.3254 5.66606C51.9413 5.66606 53.1637 6.32487 53.9512 7.39616V5.93374ZM50.6779 14.3771C52.5424 14.3771 53.9512 12.9972 53.9512 11.0819C53.9512 9.16665 52.5424 7.78729 50.6779 7.78729C48.8134 7.78729 47.4046 9.16722 47.4046 11.0819C47.4046 12.9972 48.8134 14.3771 50.6779 14.3771ZM59.9174 4.38939C59.1305 4.38939 58.4885 3.73058 58.4885 2.96851C58.4903 2.59083 58.6417 2.22926 58.9095 1.96296C59.1773 1.69665 59.5397 1.54731 59.9174 1.54762C60.2952 1.54715 60.6578 1.69643 60.9257 1.96275C61.1937 2.22907 61.3451 2.59073 61.347 2.96851C61.347 3.73 60.7049 4.38939 59.9174 4.38939ZM58.7988 16.2307V5.93374H61.0366V16.2307H58.7988ZM63.6263 16.2307V1.19629H65.8635V16.2301H63.6263V16.2307ZM80.3867 5.93374H82.7485L79.496 16.2307H77.2998L75.1451 9.29068L72.9696 16.2307H70.774L67.5209 5.93374H69.8827L71.8926 13.0382L74.068 5.93374H76.202L78.3561 13.0382L80.3867 5.93374ZM85.5246 4.38939C84.7371 4.38939 84.095 3.73058 84.095 2.96851C84.0968 2.59073 84.2483 2.22907 84.5163 1.96275C84.7842 1.69643 85.1468 1.54715 85.5246 1.54762C85.9023 1.54715 86.2649 1.69643 86.5328 1.96275C86.8008 2.22907 86.9523 2.59073 86.9541 2.96851C86.9541 3.73 86.312 4.38939 85.5246 4.38939ZM84.406 16.2307V5.93374H86.6431V16.2307H84.406ZM94.6816 5.66606C97.0018 5.66606 98.6593 7.23117 98.6593 9.90853V16.2301H96.4221V10.1347C96.4221 8.56956 95.5106 7.74634 94.1018 7.74634C92.6307 7.74634 91.4706 8.6111 91.4706 10.7116V16.2307H89.2328V5.93374H91.4706V7.25194C92.1542 6.18122 93.2728 5.66606 94.6816 5.66606ZM109.267 1.8153H111.504V16.2301H109.267V14.7475C108.48 15.839 107.257 16.4978 105.641 16.4978C102.824 16.4978 100.483 14.1297 100.483 11.0814C100.483 8.01344 102.824 5.66548 105.641 5.66548C107.257 5.66548 108.48 6.32429 109.267 7.39558V1.8153ZM105.993 14.3771C107.858 14.3771 109.267 12.9972 109.267 11.0819C109.267 9.16665 107.858 7.78729 105.993 7.78729C104.129 7.78729 102.72 9.16722 102.72 11.0819C102.72 12.9972 104.129 14.3771 105.993 14.3771ZM119.004 16.4984C115.875 16.4984 113.534 14.1302 113.534 11.0819C113.534 8.01401 115.875 5.66606 119.004 5.66606C121.034 5.66606 122.795 6.716 123.624 8.32265L121.697 9.4349C121.241 8.46688 120.226 7.84902 118.983 7.84902C117.16 7.84902 115.772 9.22895 115.772 11.0819C115.772 12.9355 117.16 14.3154 118.983 14.3154C120.226 14.3154 121.241 13.6768 121.738 12.7295L123.665 13.821C122.795 15.4479 121.034 16.4978 119.004 16.4978V16.4984ZM127.353 8.77551C127.353 10.6498 132.926 9.51682 132.926 13.3272C132.926 15.3867 131.123 16.4984 128.886 16.4984C126.815 16.4984 125.323 15.5713 124.66 14.0887L126.587 12.977C126.918 13.9035 127.747 14.4596 128.886 14.4596C129.881 14.4596 130.647 14.1302 130.647 13.3059C130.647 11.4736 125.074 12.5034 125.074 8.81705C125.074 6.881 126.752 5.66606 128.865 5.66606C130.564 5.66606 131.973 6.4489 132.698 7.80806L130.813 8.85801C130.44 8.05497 129.715 7.68403 128.865 7.68403C128.057 7.68403 127.353 8.03421 127.353 8.77551ZM136.904 8.77551C136.904 10.6498 142.477 9.51682 142.477 13.3272C142.477 15.3867 140.674 16.4984 138.437 16.4984C136.365 16.4984 134.874 15.5713 134.21 14.0887L136.137 12.977C136.469 13.9035 137.297 14.4596 138.437 14.4596C139.431 14.4596 140.198 14.1302 140.198 13.3059C140.198 11.4736 134.625 12.5034 134.625 8.81705C134.625 6.881 136.303 5.66606 138.416 5.66606C140.115 5.66606 141.524 6.4489 142.249 7.80806L140.363 8.85801C139.991 8.05497 139.266 7.68403 138.416 7.68403C137.608 7.68403 136.904 8.03421 136.904 8.77551Z"
                  fill="#94A3B8"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h2 class="mt-8 max-w-lg mx-auto font-normal text-lg leading-8 text-slate-500 lg:mt-10 lg:max-w-5xl">
          A unified ecosystem for governments, contractors, and stakeholders.
          Real-time data streaming, resource tracking, and personalized
          dashboards, simplifying communication and optimizing operations.
        </h2>
      </div>
    </>
  );
};

export default CopyPaste1;
