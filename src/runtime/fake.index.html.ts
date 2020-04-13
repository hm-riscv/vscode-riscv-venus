module.exports = `<div>Active File: <span id="activeFileInEditor">null</span> <a onclick="driver.clearActiveFileInEditor();"> Clear</a></div>
<button id="sv" class="button" onclick="if(window.svclr&&this.value==='false'){window.svclr = false;return;}window.svclr = false;toggleThis(this);driver.persistentStorage(this.value === 'true');" value="false" style="text-align: center;">Save on Close</button>
<div id="ArgsList-div" class="panel-block">
	<div class="field is-horizontal">
	<div class="field-label">
		<label class="label is-small" for="ArgsList">Simulator Default Args</label>
	</div>
	<div class="field-body is-expanded">
		<input id="ArgsList" class="input" spellcheck="false">
	</div>
	</div>
</div>
<input id="setNumCacheLvls" type="number" class="input" onblur="driver.setNumberOfCacheLevels(parseInt(this.value))" spellcheck="false" value="1"></li>
<input id="block-size-val" class="input is-small" type="number" onblur="driver.updateCacheBlockSize(this)" spellcheck="false">
<input id="numblocks-val" class="input is-small" type="number" onblur="driver.updateCacheNumberOfBlocks(this)" spellcheck="false">
<input id="associativity-val" class="input is-small" type="number" onblur="driver.updateCacheAssociativity(this)" spellcheck="false">
<select id="associativity-type" onchange="driver.updateCachePlacementPolicy(this)">
	<option selected>Direct Mapped</option>
	<option>N-Way Set Associative</option>
	<option>Fully Associative</option>
</select>
<select id="replacementPolicy" onchange="driver.updateCacheReplacementPolicy(this)">
	<option selected>LRU</option>
	<option>Random</option>
</select>
<input id="cache-size-val" class="input is-small" spellcheck="false" disabled>
<input id="cache-seed" class="input is-small" spellcheck="false" onblur="driver.setCacheSeed(this.value)" value="">
<button id="cacheEnabled" class="button is-primary" onclick="toggleThis(this);driver.setCacheEnabled(this.value === 'true');" value="true" style="text-align: center;height: 45px;">Enable?</button>
<input id="package-url-val" type="text" class="input is-small" onblur="" onkeydown="if((event.keyCode ? event.keyCode : event.which) === 13){document.getElementById('addpkg').click()}" value="" placeholder="Package URL" spellcheck="false">
<textarea id="tregPattern" class="textarea" placeholder="Please type in the format of the output you want.">%output%%0%	%1%	%2%	%3%	%4%	%5%	%6%	%7%	%8%	%9%	%10%	%11%	%12%	%13%	%14%	%15%	%16%	%17%	%18%	%19%	%20%	%21%	%22%	%23%	%24%	%25%	%26%	%27%	%28%	%29%	%30%	%31%	%line%	%pc%	%inst%</textarea>
<input id="tbase-val" type="number" class="input is-small" style="width:180px;" onblur="validateBase(this);" onkeyup="validateBase(this);" value=2 spellcheck="false">
<input id="ttot-cmds-val" type="number" class="input is-small" style="width:180px;" onblur="" value=-1 spellcheck="false">
<input id="tmaxsteps-val" type="number" class="input is-small" style="width:180px;" onblur="" value=-1 spellcheck="false" onkeyup="driver.updateMaxSteps()">
<button id="tinst-first" class="button is-primary" onclick="toggleThis(this)" value="true">Inst First</button>
<button id="tTwoStage" class="button" onclick="toggleThis(this)" value="false">Two Stage</button>
<button id="tPCWAddr" class="button is-primary" onclick="toggleThis(this)" value="true">PC Word Addr</button>
<input id="text-start" class="input" onblur="driver.verifyText(this)" spellcheck="false">
<button id="alignAddr" class="button" onclick="toggleThis(this);driver.setAlignedAddressing(this.value === 'true');" value="false" style="text-align: center;height: 45px;">Aligned<br>Addressing</button>
<div id="mutableText-div" class="panel-block">
	<div class="field is-horizontal">
	<div class="field-label">
		<button id="mutableText" class="button is-primary" onclick="toggleThis(this);driver.setMutableText(this.value === 'true');" value="true" style="text-align: center;height: 45px;">Mutable Text</button>
	</div>
	<div class="field-body is-expanded">
		<label class="label" for="mutableText">Mutable Text?</label>
	</div>
	</div>
</div>
<button id="ecallExit" class="button" onclick="toggleThis(this);driver.setOnlyEcallExit(this.value === 'true');" value="false" style="text-align: center;">Only Ecall Exit</button>
<button id="setRegsOnInit" class="button is-primary" onclick="toggleThis(this);driver.setSetRegsOnInit(this.value === 'true');" value="true" style="text-align: center;">Default Reg States</button>
`