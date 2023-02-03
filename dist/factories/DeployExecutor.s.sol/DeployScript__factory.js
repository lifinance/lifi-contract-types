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
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        inputs: [],
        name: "run",
        outputs: [
            {
                internalType: "contract Executor",
                name: "deployed",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "constructorArgs",
                type: "bytes",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600881526722bc32b1baba37b960c11b60208201529051634bca482160e11b8152600080516020620037b2833981519152906397949042906200008d906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000ad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d391906200057c565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620037b28339815191529063ffa18649906024016020604051808303816000875af11580156200012a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000150919062000596565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620037b28339815191529063350d56bf906064016020604051808303816000875af1158015620001ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000214919062000596565b60405163f877cb1960e01b8152909150600090600080516020620037b28339815191529063f877cb1990620002649060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000284573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002ae919081019062000604565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000344919081019062000604565b6006906200035390826200074b565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620037b28339815191529063f877cb19906064016000604051808303816000875af1158015620003b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e3919081019062000604565b600790620003f290826200074b565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620037b28339815191529063f877cb19906064016000604051808303816000875af11580156200045c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000486919081019062000604565b6008906200049590826200074b565b508083604051602001620004ab92919062000817565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000552919062000596565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084a915050565b6000602082840312156200058f57600080fd5b5051919050565b600060208284031215620005a957600080fd5b81516001600160a01b0381168114620005c157600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fb578181015183820152602001620005e1565b50506000910152565b6000602082840312156200061757600080fd5b81516001600160401b03808211156200062f57600080fd5b818401915084601f8301126200064457600080fd5b815181811115620006595762000659620005c8565b604051601f8201601f19908116603f01168101908382118183101715620006845762000684620005c8565b816040528281528760208487010111156200069e57600080fd5b620006b1836020830160208801620005de565b979650505050505050565b600181811c90821680620006d157607f821691505b602082108103620006f257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074657600081815260208120601f850160051c81016020861015620007215750805b601f850160051c820191505b8181101562000742578281556001016200072d565b5050505b505050565b81516001600160401b03811115620007675762000767620005c8565b6200077f81620007788454620006bc565b84620006f8565b602080601f831160018114620007b757600084156200079e5750858301515b600019600386901b1c1916600185901b17855562000742565b600085815260208120601f198616915b82811015620007e857888601518255948401946001909101908401620007c7565b5085821015620008075787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082b818460208801620005de565b83519083019062000841818360208801620005de565b01949350505050565b612f58806200085a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906105fc565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060006006600760086040516020016100dc93929190610707565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb119061015d9085906004016107a5565b6000604051808303816000875af115801561017c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101c29190810190610879565b9050600061020e6040518060400160405280600b81526020017f2e455243323050726f7879000000000000000000000000000000000000000000815250836104ad90919063ffffffff16565b6002546040805173ffffffffffffffffffffffffffffffffffffffff928316602082015291831690820152909150606001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156102d457600080fd5b505af11580156102e8573d6000803e3d6000fd5b5050505061030e60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561033557505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a919061036a60208201610581565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526103ac919089906020016108c2565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016103d89291906108f1565b6020604051808303816000875af11580156103f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041b919061092f565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561048e57600080fd5b505af11580156104a2573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610502908690869060040161094c565b6000604051808303816000875af1158015610521573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105679190810190610879565b80602001905181019061057a919061092f565b9392505050565b6125a88061097b83390190565b60005b838110156105a9578181015183820152602001610591565b50506000910152565b600081518084526105ca81602086016020860161058e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061062b60408301846105b2565b949350505050565b8054600090600181811c908083168061064d57607f831692505b60208084108203610687577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b81801561069b57600181146106ce576106fb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528415158502890196506106fb565b60008881526020902060005b868110156106f35781548b8201529085019083016106da565b505084890196505b50505050505092915050565b60006107138286610633565b7f2f6465706c6f796d656e74732f000000000000000000000000000000000000008152610743600d820186610633565b90507f2e0000000000000000000000000000000000000000000000000000000000000081526107756001820185610633565b7f6a736f6e0000000000000000000000000000000000000000000000000000000081526004019695505050505050565b60208152600061057a60208301846105b2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610802576108026107b8565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610848576108486107b8565b8160405280935085815286868601111561086157600080fd5b61086f86602083018761058e565b5050509392505050565b60006020828403121561088b57600080fd5b815167ffffffffffffffff8111156108a257600080fd5b8201601f810184136108b357600080fd5b61062b848251602084016107e7565b600083516108d481846020880161058e565b8351908301906108e881836020880161058e565b01949350505050565b82815260406020820152600061062b60408301846105b2565b73ffffffffffffffffffffffffffffffffffffffff8116811461092c57600080fd5b50565b60006020828403121561094157600080fd5b815161057a8161090a565b60408152600061095f60408301856105b2565b828103602084015261097181856105b2565b9594505050505056fe60806040523480156200001157600080fd5b50604051620025a8380380620025a88339810160408190526200003491620000af565b600080546001600160a01b038085166001600160a01b03199283161783556002805491851691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b6124b180620000f76000396000f3fe60806040526004361061009a5760003560e01c80637f555b0311610069578063a83cbaa31161004e578063a83cbaa314610188578063e30c39781461019b578063f2fde38b146101c857600080fd5b80637f555b03146101055780638da5cb5b1461015b57600080fd5b806323452b9c146100a65780634f91bc2b146100bd5780635004a4b7146100d05780637200b829146100f057600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100bb6101e8565b005b6100bb6100cb366004612086565b6102b2565b3480156100dc57600080fd5b506100bb6100eb3660046120fa565b610353565b3480156100fc57600080fd5b506100bb610413565b34801561011157600080fd5b506002546101329073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016757600080fd5b506000546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100bb610196366004612117565b6104f9565b3480156101a757600080fd5b506001546101329073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d457600080fd5b506100bb6101e33660046120fa565b610594565b60005473ffffffffffffffffffffffffffffffffffffffff163314610239576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610288576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506103488686868686600060016106f2565b600090555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103a4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a990600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610465576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610574576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561058887878787878760006106f2565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105e5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610632576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610681576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6000808088886107036001826121c2565b818110610712576107126121d5565b90506020028101906107249190612204565b6107359060808101906060016120fa565b905073ffffffffffffffffffffffffffffffffffffffff8116156107635761075c816109cb565b915061077a565b3461076d826109cb565b61077791906121c2565b91505b73ffffffffffffffffffffffffffffffffffffffff8716156108ed5761079f876109cb565b92508315610850576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190612242565b905061084a8882610a84565b50610904565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050610904565b346108f7886109cb565b61090191906121c2565b92505b6109108a8a8a89610c04565b600061091b886109cb565b90508381111561093957610939888861093487856121c2565b610f16565b6000610944836109cb565b90508381111561095d5761095d838961093487856121c2565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190612242565b610a7e565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8216610add5780341015610ad9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610b17576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba89190612242565b905081811015610bf3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610bff83333085610f47565b505050565b8282828160018114610e2b576000610c1c8585611161565b905060008585610c2d6001866121c2565b818110610c3c57610c3c6121d5565b9050602002810190610c4e9190612204565b610c5f9060808101906060016120fa565b9050600088815b81811015610d405760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610c9957610c996121d5565b9050602002810190610cab9190612204565b610cb99060208101906120fa565b73ffffffffffffffffffffffffffffffffffffffff1603610d06576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610d1957610d196121d5565b9050602002810190610d2b9190612204565b9050610d378e8261126d565b50600101610c66565b505060005b610d506001866121c2565b811015610e22576000888883818110610d6b57610d6b6121d5565b9050602002810190610d7d9190612204565b610d8e9060808101906060016120fa565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e1957610dcc816109cb565b9250848281518110610de057610de06121d5565b6020026020010151831115610e1957610e198188878581518110610e0657610e066121d5565b60200260200101518661093491906121c2565b50600101610d45565b50505050610f0c565b8560005b81811015610f095760025473ffffffffffffffffffffffffffffffffffffffff16898983818110610e6257610e626121d5565b9050602002810190610e749190612204565b610e829060208101906120fa565b73ffffffffffffffffffffffffffffffffffffffff1603610ecf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610ee257610ee26121d5565b9050602002810190610ef49190612204565b9050610f008b8261126d565b50600101610e2f565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610f3d57610bff83838361159d565b610bff82826116d2565b73ffffffffffffffffffffffffffffffffffffffff8416610f94576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fe1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611052573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110769190612242565b9050611084828686866117fc565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156110f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111189190612242565b61112291906121c2565b14611159576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff81111561117f5761117f61225b565b6040519080825280602002602001820160405280156111a8578160200160208202803683370190505b5090506000805b83811015611262578686828181106111c9576111c96121d5565b90506020028101906111db9190612204565b6111ec9060808101906060016120fa565b91506111f7826109cb565b838281518110611209576112096121d5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661125a5734838281518110611242576112426121d5565b6020026020010181815161125691906121c2565b9052505b6001016111af565b509095945050505050565b61128361127d60208301836120fa565b3b151590565b6112b9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036112f9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061132861130e60608501604086016120fa565b73ffffffffffffffffffffffffffffffffffffffff161590565b611333576000611339565b82608001355b9050600061135561135060608601604087016120fa565b6109cb565b9050600061136c61135060808701606088016120fa565b9050826000036113a3576113a361138960608701604088016120fa565b61139960408801602089016120fa565b87608001356118d8565b84608001358210156113ee576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610bea565b6000806113fe60208801886120fa565b73ffffffffffffffffffffffffffffffffffffffff168561142260a08a018a61228a565b6040516114309291906122ef565b60006040518083038185875af1925050503d806000811461146d576040519150601f19603f3d011682016040523d82523d6000602084013e611472565b606091505b5091509150816114bd57600061148782611a1d565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea9190612323565b60006114d261135060808a0160608b016120fa565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961150360208b018b6120fa565b61151360608c0160408d016120fa565b61152360808d0160608e016120fa565b8c60800135898711611535578661153f565b61153f8a886121c2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115ea576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167b9190612242565b9050808211156116c1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610bea565b6116cc848484611a9b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661171f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611762576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610bea565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117bc576040519150601f19603f3d011682016040523d82523d6000602084013e6117c1565b606091505b5050905080610bff576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526116cc9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611af1565b73ffffffffffffffffffffffffffffffffffffffff83166118f857505050565b73ffffffffffffffffffffffffffffffffffffffff8216611945576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156119bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119df9190612242565b9050818110156116cc576116cc8484611a18847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6121c2565b611bfd565b6060604482511015611a6257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611a7e6004808551611a7691906121c2565b859190611cfb565b905080806020019051810190611a949190612374565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bff9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611856565b6000611b53826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e159092919063ffffffff16565b805190915015610bff5780806020019051810190611b719190612434565b610bff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bea565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611c74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c989190612242565b611ca29190612456565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506116cc9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611856565b606081611d0981601f612456565b1015611d41576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d4b8284612456565b84511015611d85576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611da45760405191506000825260208201604052611e0c565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ddd578051835260209283019201611dc5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e248484600085611e2c565b949350505050565b606082471015611ebe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bea565b73ffffffffffffffffffffffffffffffffffffffff85163b611f3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bea565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f659190612469565b60006040518083038185875af1925050503d8060008114611fa2576040519150601f19603f3d011682016040523d82523d6000602084013e611fa7565b606091505b5091509150611fb7828286611fc2565b979650505050505050565b60608315611fd1575081611a94565b825115611fe15782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea9190612323565b60008083601f84011261202757600080fd5b50813567ffffffffffffffff81111561203f57600080fd5b6020830191508360208260051b850101111561205a57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461208357600080fd5b50565b60008060008060006080868803121561209e57600080fd5b85359450602086013567ffffffffffffffff8111156120bc57600080fd5b6120c888828901612015565b90955093505060408601356120dc81612061565b915060608601356120ec81612061565b809150509295509295909350565b60006020828403121561210c57600080fd5b8135611a9481612061565b60008060008060008060a0878903121561213057600080fd5b86359550602087013567ffffffffffffffff81111561214e57600080fd5b61215a89828a01612015565b909650945050604087013561216e81612061565b9250606087013561217e81612061565b80925050608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a7e57610a7e612193565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261223857600080fd5b9190910192915050565b60006020828403121561225457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122bf57600080fd5b83018035915067ffffffffffffffff8211156122da57600080fd5b60200191503681900382131561205a57600080fd5b8183823760009101908152919050565b60005b8381101561231a578181015183820152602001612302565b50506000910152565b60208152600082518060208401526123428160408501602087016122ff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561238657600080fd5b815167ffffffffffffffff8082111561239e57600080fd5b818401915084601f8301126123b257600080fd5b8151818111156123c4576123c461225b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561240a5761240a61225b565b8160405282815287602084870101111561242357600080fd5b611fb78360208301602088016122ff565b60006020828403121561244657600080fd5b81518015158114611a9457600080fd5b80820180821115610a7e57610a7e612193565b600082516122388184602087016122ff56fea2646970667358221220333597075b6b58da57706374ba21689f008403d04ac7534227ec868c2a752ed064736f6c63430008110033a264697066735822122093aad153b981d7aebd21157cf8063cf7133aa7d0b8b746356199b0c6c0851dfb64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
