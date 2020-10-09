<!DOCTYPE html>
<html>
<head> 
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>以太坊发币ERC20</title>
  <link rel="stylesheet" href="layui/css/layui.css">

<style>
body{ text-align:left} 
#zou{margin:5%} 
</style>


	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"> </script>
    <script src="layui/layui.js"></script> 
    <script src="https://github.com/eth-eth/-/blob/main/web3.min.js"></script>  
 
</head>
<body   >
 

<!-- 你的HTML代码 -->
<form class="layui-form" id="zou" action="">
 

<fieldset class="layui-elem-field layui-field-title">
  <legend>ERC20代币快速创建</legend> 
</fieldset>
 
 
 
 
  <div class="layui-form-item">
    <label class="layui-form-label">货币名称</label>
    <div class="layui-input-block" id="guan">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入货币 " autocomplete="off" class="layui-input" id="_name"> 
	  <div class="layui-form-mid layui-word-aux">请输入货币名称1-64位字符，可以是中文或英文，如：安卓币</div>
	</div>
  </div>
 
  <div class="layui-form-item">
    <label class="layui-form-label">货币符号</label>
    <div class="layui-input-block" id="guan">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入货币符号（简称）" autocomplete="off" class="layui-input" id="_symbol"> 
	  <div class="layui-form-mid layui-word-aux">请输入货币符号（简称），1-16位字符，如：AZB或AZB168</div>
    </div> 
  </div> 
  
  <div class="layui-form-item">
    <label class="layui-form-label">发行量</label>
    <div class="layui-input-block" id="guan">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入货币发行量" autocomplete="off" class="layui-input" id="_itialSupply"> 
	    <div class="layui-form-mid layui-word-aux">请输入货币发行量，如发行1亿个：100000000</div>
	 
    </div> 
  </div>  
    <div class="layui-form-item">  <div class="layui-input-block" id="guan">   
    <div class="layui-form-mid layui-word-aux">代币符合ERC20标准，默认小数位数18位，发币成功后即可在钱包中显示，提供合约源码（上交易所必备），创建代币花费0.5ETH左右,请确保钱包中有充足的余额。</div></div> 
  </div> 
  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="formDemo" onclick="deploya()">立即创建</button>
      
    </div>
  </div>
</form>
 
 
<script src="layui/layui.js"></script>
<script> 
   var  web3;
   var accounts;
 
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/JAR8iosNln1mJh9dwAGE"));
    }
 
    async function init(){ 
 	    // console.log(Contract); 取得玩家帐号accounts[0]
	    accounts = await  web3.eth.getAccounts();
	    console.log("8888888888888888"+accounts[0]);	
  		 
        //如果玩家帐户不为	 undefined，显示玩家信息
        if(accounts[0] !== undefined){
            console.log(accounts[0]) 
	    } 
    }  
init();
 
function deploya(){ 
var _itialSupply = document.getElementById("_itialSupply").value ; 
var _name = document.getElementById("_name").value ;
var _symbol = document.getElementById("_symbol").value ;
var contract = new web3.eth.Contract([{"inputs":[{"internalType":"uint256","name":"_itialSupply","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]);

contract.deploy({
    data: '0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80636618846311610071578063661884631461025b57806370a08231146102bf57806395d89b4114610317578063a9059cbb1461039a578063d73dd623146103fe578063dd62ed3e14610462576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019557806323b872dd146101b3578063313ce56714610237575b600080fd5b6100b66104da565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610578565b60405180821515815260200191505060405180910390f35b61019d61066a565b6040518082815260200191505060405180910390f35b61021f600480360360608110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610670565b60405180821515815260200191505060405180910390f35b61023f610a29565b604051808263ffffffff16815260200191505060405180910390f35b6102a76004803603604081101561027157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a2e565b60405180821515815260200191505060405180910390f35b610301600480360360208110156102d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cbf565b6040518082815260200191505060405180910390f35b61031f610d08565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035f578082015181840152602081019050610344565b50505050905090810190601f16801561038c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103e6600480360360408110156103b057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610da6565b60405180821515815260200191505060405180910390f35b61044a6004803603604081101561041457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fc6565b60405180821515815260200191505060405180910390f35b6104c46004803603604081101561047857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111c2565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105705780601f1061054557610100808354040283529160200191610570565b820191906000526020600020905b81548152906001019060200180831161055357829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60025481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106ab57600080fd5b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156106f757600080fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561078057600080fd5b6107d282600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461124990919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061086782600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126090919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061093982600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461124990919063ffffffff16565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b601281565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610b3f576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bd3565b610b52838261124990919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d9e5780601f10610d7357610100808354040283529160200191610d9e565b820191906000526020600020905b815481529060010190602001808311610d8157829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610de157600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610e2d57600080fd5b610e7f82600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461124990919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f1482600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126090919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061105782600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126090919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008282111561125557fe5b818303905092915050565b600081830190508281101561127157fe5b9291505056fea26469706673582212209a71dd062e1b35bfd731615081e3a5299556b6d0f4e0bcf884d6ea4bb32cb1d164736f6c634300060c0033',//合约bytecode
    arguments: [_itialSupply,_name,_symbol] //给构造函数传递参数,使用数组
}).send({
    from: accounts[0],
    gas: '1304053',
    //gasPrice: '2000000000',
	value :'1000000000000000000'
}).then(transactionHash =>{ 
    console.log('address :',transactionHash)
});
} 
 
</script>
</body>
</html>
