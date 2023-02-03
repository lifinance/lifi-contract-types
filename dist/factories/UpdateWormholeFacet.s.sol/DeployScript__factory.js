"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployScript__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "IS_SCRIPT",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "code",
                type: "bytes4",
            },
        ],
        name: "fromCode",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "run",
        outputs: [
            {
                internalType: "address[]",
                name: "facets",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vm",
        outputs: [
            {
                internalType: "contract Vm",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b60448201526000805160206200258d833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae91906200045c565b600490815560408051636c98507360e11b815290516000805160206200258d8339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012891908101906200052e565b60059062000137908262000612565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b60448201526000805160206200258d8339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c791908101906200052e565b600690620001d6908262000612565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b60448201526000805160206200258d8339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a91908101906200052e565b60079062000279908262000612565b506000600560066007604051602001620002969392919062000759565b60408051601f19818403018152908290526360f9bb1160e01b825291506000906000805160206200258d833981519152906360f9bb1190620002dd908590600401620007e6565b6000604051808303816000875af1158015620002fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200032791908101906200052e565b9050620003676040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b81525082620003bd60201b62000a9e1790919060201c565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b031992831681179091556003805490921617905550620008589050565b6040516385940ef160e01b81526000906000805160206200258d833981519152906385940ef190620003f69086908690600401620007fb565b6000604051808303816000875af115801562000416573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200044091908101906200052e565b8060200190518101906200045591906200082d565b9392505050565b6000602082840312156200046f57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004a95781810151838201526020016200048f565b50506000910152565b60006001600160401b0380841115620004cf57620004cf62000476565b604051601f8501601f19908116603f01168101908282118183101715620004fa57620004fa62000476565b816040528093508581528686860111156200051457600080fd5b620005248660208301876200048c565b5050509392505050565b6000602082840312156200054157600080fd5b81516001600160401b038111156200055857600080fd5b8201601f810184136200056a57600080fd5b6200057b84825160208401620004b2565b949350505050565b600181811c908216806200059857607f821691505b602082108103620005b957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200060d57600081815260208120601f850160051c81016020861015620005e85750805b601f850160051c820191505b818110156200060957828155600101620005f4565b5050505b505050565b81516001600160401b038111156200062e576200062e62000476565b62000646816200063f845462000583565b84620005bf565b602080601f8311600181146200067e5760008415620006655750858301515b600019600386901b1c1916600185901b17855562000609565b600085815260208120601f198616915b82811015620006af578886015182559484019460019091019084016200068e565b5085821015620006ce5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154620006ed8162000583565b600182811680156200070857600181146200071e576200074f565b60ff19841687528215158302870194506200074f565b8560005260208060002060005b85811015620007465781548a8201529084019082016200072b565b50505082870194505b5050505092915050565b6000620007678286620006de565b6c2f6465706c6f796d656e74732f60981b815262000789600d820186620006de565b9050601760f91b8152620007a16001820185620006de565b633539b7b760e11b81526004019695505050505050565b60008151808452620007d28160208601602086016200048c565b601f01601f19169290920160200192915050565b602081526000620004556020830184620007b8565b604081526000620008106040830185620007b8565b8281036020840152620008248185620007b8565b95945050505050565b6000602082840312156200084057600080fd5b81516001600160a01b03811681146200045557600080fd5b611d2580620008686000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100cf575b600080fd5b61006461005f366004610f79565b6100ec565b604051610071919061100b565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f1565b604051610071919061101e565b6000546100dc9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610145576101456110a7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a8576101a86110a7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102ea5761020b60108583600481106101fa576101fa6110a7565b6102069291901a611134565b610b74565b82610217836002611156565b61022290600261116d565b81518110610232576102326110a7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102846010858360048110610278576102786110a7565b6102069291901a611180565b82610290836002611156565b61029b90600361116d565b815181106102ab576102ab6110a7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e3816111a2565b90506101da565b5092915050565b6060600060056006600760405160200161030d939291906112ae565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb119061038e90859060040161100b565b6000604051808303816000875af11580156103ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f39190810190611431565b9050600061043f6040518060400160405280600e81526020017f2e576f726d686f6c65466163657400000000000000000000000000000000000081525083610a9e90919063ffffffff16565b905060056040516020016104539190611482565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529350737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906104d190869060040161100b565b6000604051808303816000875af11580156104f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105369190810190611431565b915060006105826040518060400160405280600781526020017f2e636861696e730000000000000000000000000000000000000000000000000081525084610bc990919063ffffffff16565b905060008180602001905181019061059a91906114df565b9050600063fbf88f0360e01b826040516024016105b791906115ac565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092526004805492517fce817d47000000000000000000000000000000000000000000000000000000008152919350737109709ecfa91a80626ff3989d68f67f5b1dd12d9263ce817d479261068a920190815260200190565b600060405180830381600087803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b50506003546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116925063adfca15e9150602401600060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261077291908101906115ff565b516000036109575760408051606081810190925273ffffffffffffffffffffffffffffffffffffffff8616815260019060208101600081526020016107ec6040518060400160405280600d81526020017f576f726d686f6c6546616365740000000000000000000000000000000000000081525085610c83565b90528154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156108a5576108a561168e565b0217905550604082015180516108c5916001840191602090910190610e87565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c9061092390600190899087906004016116bd565b600060405180830381600087803b15801561093d57600080fd5b505af1158015610951573d6000803e3d6000fd5b50505050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109c4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a0a9190810190611b0c565b96507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610a7d57600080fd5b505af1158015610a91573d6000803e3d6000fd5b5050505050505050505090565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610af39086908690600401611b9b565b6000604051808303816000875af1158015610b12573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b589190810190611431565b806020019051810190610b6b9190611bc9565b90505b92915050565b600060098260ff1611610b9557610b8c826030611be6565b60f81b92915050565b8160ff16600a11158015610bad5750600f8260ff1611155b1561004c57600a610bbf836061611be6565b610b8c9190611bff565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152606090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610c1e9086908690600401611b9b565b6000604051808303816000875af1158015610c3d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b6b9190810190611431565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081610c9f5790505090506040518060400160405280601d81526020017f736372697074732f636f6e74726163742d73656c6563746f72732e736800000081525081600081518110610cff57610cff6110a7565b60200260200101819052508381600181518110610d1e57610d1e6110a7565b6020026020010181905250606060005b8451811015610d8f5781610d5a868381518110610d4d57610d4d6110a7565b60200260200101516100ec565b604051602001610d6b929190611c18565b60405160208183030381529060405291508080610d87906111a2565b915050610d2e565b508082600281518110610da457610da46110a7565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610e02908690600401611c6f565b6000604051808303816000875af1158015610e21573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e679190810190611431565b905080806020019051810190610e7d91906115ff565b9695505050505050565b82805482825590600052602060002090600701600890048101928215610f235791602002820160005b83821115610ef157835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610eb0565b8015610f215782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610ef1565b505b50610f2f929150610f33565b5090565b5b80821115610f2f5760008155600101610f34565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f7657600080fd5b50565b600060208284031215610f8b57600080fd5b8135610f9681610f48565b9392505050565b60005b83811015610fb8578181015183820152602001610fa0565b50506000910152565b60008151808452610fd9816020860160208601610f9d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610b6b6020830184610fc1565b6020808252825182820181905260009190848201906040850190845b8181101561106c57835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161103a565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff831680611147576111476110d6565b8060ff84160491505092915050565b8082028115828204841417610b6e57610b6e611105565b80820180821115610b6e57610b6e611105565b600060ff831680611193576111936110d6565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111d3576111d3611105565b5060010190565b8054600090600181811c90808316806111f457607f831692505b6020808410820361122e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b8180156112425760018114611275576112a2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528415158502890196506112a2565b60008881526020902060005b8681101561129a5781548b820152908501908301611281565b505084890196505b50505050505092915050565b60006112ba82866111da565b7f2f6465706c6f796d656e74732f0000000000000000000000000000000000000081526112ea600d8201866111da565b90507f2e00000000000000000000000000000000000000000000000000000000000000815261131c60018201856111da565b7f6a736f6e0000000000000000000000000000000000000000000000000000000081526004019695505050505050565b6040805190810167ffffffffffffffff8111828210171561136f5761136f611078565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156113bc576113bc611078565b604052919050565b600067ffffffffffffffff8311156113de576113de611078565b61140f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601611375565b905082815283838301111561142357600080fd5b610f96836020830184610f9d565b60006020828403121561144357600080fd5b815167ffffffffffffffff81111561145a57600080fd5b8201601f8101841361146b57600080fd5b61147a848251602084016113c4565b949350505050565b600061148e82846111da565b7f2f636f6e6669672f776f726d686f6c652e6a736f6e000000000000000000000081526015019392505050565b600067ffffffffffffffff8211156114d5576114d5611078565b5060051b60200190565b600060208083850312156114f257600080fd5b825167ffffffffffffffff81111561150957600080fd5b8301601f8101851361151a57600080fd5b805161152d611528826114bb565b611375565b81815260069190911b8201830190838101908783111561154c57600080fd5b928401925b828410156115a1576040848903121561156a5760008081fd5b61157261134c565b845181528585015161ffff8116811461158b5760008081fd5b8187015282526040939093019290840190611551565b979650505050505050565b602080825282518282018190526000919060409081850190868401855b828110156115f25781518051855286015161ffff168685015292840192908501906001016115c9565b5091979650505050505050565b6000602080838503121561161257600080fd5b825167ffffffffffffffff81111561162957600080fd5b8301601f8101851361163a57600080fd5b8051611648611528826114bb565b81815260059190911b8201830190838101908783111561166757600080fd5b928401925b828410156115a157835161167f81610f48565b8252928401929084019061166c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201855480825260808401915060808160051b8501018760005260208060002060005b84811015611aaf578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110611774577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b806007840110156118c85784546117d2838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b8116606085015261184960808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b61187c60a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190611797565b9354938083101561190a57611901828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156119445760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561197e5760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156119b857608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156119f257606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611a2c57604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611a645784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611a96577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b50988601989650505060029290920191506001016116e8565b505073ffffffffffffffffffffffffffffffffffffffff8816908601528481036040860152611ade8187610fc1565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610f7657600080fd5b60006020808385031215611b1f57600080fd5b825167ffffffffffffffff811115611b3657600080fd5b8301601f81018513611b4757600080fd5b8051611b55611528826114bb565b81815260059190911b82018301908381019087831115611b7457600080fd5b928401925b828410156115a1578351611b8c81611aea565b82529284019290840190611b79565b604081526000611bae6040830185610fc1565b8281036020840152611bc08185610fc1565b95945050505050565b600060208284031215611bdb57600080fd5b8151610f9681611aea565b60ff8181168382160190811115610b6e57610b6e611105565b60ff8281168282160390811115610b6e57610b6e611105565b60008351611c2a818460208801610f9d565b835190830190611c3e818360208801610f9d565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611ce2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611cd0858351610fc1565b94509285019290850190600101611c96565b509297965050505050505056fea264697066735822122094a540fec430ebb687073fb8019b914a71d4499cefb2f545955f6f98d06315c064736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DeployScript__factory = /** @class */ (function (_super) {
    __extends(DeployScript__factory, _super);
    function DeployScript__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    DeployScript__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DeployScript__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DeployScript__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DeployScript__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DeployScript__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DeployScript__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DeployScript__factory.bytecode = _bytecode;
    DeployScript__factory.abi = _abi;
    return DeployScript__factory;
}(ethers_1.ContractFactory));
exports.DeployScript__factory = DeployScript__factory;
