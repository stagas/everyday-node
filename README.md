<h1>
everyday-node <a href="https://npmjs.org/package/everyday-node"><img src="https://img.shields.io/badge/npm-v1.2.2-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-100-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Everyday node utilities.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i everyday-node </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add everyday-node </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add everyday-node</code>
</td></tr></table>
</h4>

## API

<p>  <details id="CharKey$29" title="Interface" ><summary><span><a href="#CharKey$29">#</a></span>  <code><strong>CharKey</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="char$30" title="Property" ><summary><span><a href="#char$30">#</a></span>  <code><strong>char</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="key$31" title="Property" ><summary><span><a href="#key$31">#</a></span>  <code><strong>key</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Key</span></p>        </ul></details></p></ul></details><details id="discoverFileWithSuffixes$4" title="Function" ><summary><span><a href="#discoverFileWithSuffixes$4">#</a></span>  <code><strong>discoverFileWithSuffixes</strong></code><em>(pathname, suffixes)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="pathname$6" title="Parameter" ><summary><span><a href="#pathname$6">#</a></span>  <code><strong>pathname</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="suffixes$7" title="Parameter" ><summary><span><a href="#suffixes$7">#</a></span>  <code><strong>suffixes</strong></code>    </summary>    <ul><p>string  []</p>        </ul></details>  <p><strong>discoverFileWithSuffixes</strong><em>(pathname, suffixes)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;undefined | string&gt;</ul></p></p>    </ul></details><details id="exec$24" title="Function" ><summary><span><a href="#exec$24">#</a></span>  <code><strong>exec</strong></code><em>(cmd, args, options)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="cmd$26" title="Parameter" ><summary><span><a href="#cmd$26">#</a></span>  <code><strong>cmd</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="args$27" title="Parameter" ><summary><span><a href="#args$27">#</a></span>  <code><strong>args</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>    <ul><p>string  []</p>        </ul></details><details id="options$28" title="Parameter" ><summary><span><a href="#options$28">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>SpawnOptions</span></p>        </ul></details>  <p><strong>exec</strong><em>(cmd, args, options)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;unknown&gt;</ul></p></p>    </ul></details><details id="execCapture$32" title="Function" ><summary><span><a href="#execCapture$32">#</a></span>  <code><strong>execCapture</strong></code><em>(cmd, opts)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="cmd$34" title="Parameter" ><summary><span><a href="#cmd$34">#</a></span>  <code><strong>cmd</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="opts$35" title="Parameter" ><summary><span><a href="#opts$35">#</a></span>  <code><strong>opts</strong></code>    </summary>    <ul><p><span>Options</span></p>        </ul></details>  <p><strong>execCapture</strong><em>(cmd, opts)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<span>ReturnType</span>&gt;</ul></p></p>    </ul></details><details id="execCaptureSync$36" title="Function" ><summary><span><a href="#execCaptureSync$36">#</a></span>  <code><strong>execCaptureSync</strong></code><em>(cmd, opts)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="cmd$38" title="Parameter" ><summary><span><a href="#cmd$38">#</a></span>  <code><strong>cmd</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="opts$39" title="Parameter" ><summary><span><a href="#opts$39">#</a></span>  <code><strong>opts</strong></code>    </summary>    <ul><p><span>Options</span></p>        </ul></details>  <p><strong>execCaptureSync</strong><em>(cmd, opts)</em>  &nbsp;=&gt;  <ul><span>ReturnType</span></ul></p></p>    </ul></details><details id="exists$1" title="Function" ><summary><span><a href="#exists$1">#</a></span>  <code><strong>exists</strong></code><em>(pathname)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="pathname$3" title="Parameter" ><summary><span><a href="#pathname$3">#</a></span>  <code><strong>pathname</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>exists</strong><em>(pathname)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;boolean&gt;</ul></p></p>    </ul></details><details id="keypress$11" title="Function" ><summary><span><a href="#keypress$11">#</a></span>  <code><strong>keypress</strong></code><em>(msg, cb)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="msg$13" title="Parameter" ><summary><span><a href="#msg$13">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="cb$14" title="Function" ><summary><span><a href="#cb$14">#</a></span>  <code><strong>cb</strong></code><em>(char, key)</em>    </summary>    <ul>    <p>    <details id="char$17" title="Parameter" ><summary><span><a href="#char$17">#</a></span>  <code><strong>char</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="key$18" title="Parameter" ><summary><span><a href="#key$18">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p><span>Key</span></p>        </ul></details>  <p><strong>cb</strong><em>(char, key)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details>  <p><strong>keypress</strong><em>(msg, cb)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<details id="__type$19" title="Function" ><summary><span><a href="#__type$19">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details>&gt;</ul></p></p>    </ul></details><details id="keypressSync$8" title="Function" ><summary><span><a href="#keypressSync$8">#</a></span>  <code><strong>keypressSync</strong></code><em>(msg)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="msg$10" title="Parameter" ><summary><span><a href="#msg$10">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>keypressSync</strong><em>(msg)</em>  &nbsp;=&gt;  <ul>string</ul></p></p>    </ul></details><details id="singleKeypress$21" title="Function" ><summary><span><a href="#singleKeypress$21">#</a></span>  <code><strong>singleKeypress</strong></code><em>(msg)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="msg$23" title="Parameter" ><summary><span><a href="#msg$23">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>singleKeypress</strong><em>(msg)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<span>Deferred</span>&lt;<a href="#CharKey$29">CharKey</a>&gt;&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities
- [get-pty-output](https://npmjs.org/package/get-pty-output) by [CyriacBr](https://github.com/CyriacBr) &ndash; Execute an external command with a PTY, from Node

## Contributing

[Fork](https://github.com/stagas/everyday-node/fork) or [edit](https://github.dev/stagas/everyday-node) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
