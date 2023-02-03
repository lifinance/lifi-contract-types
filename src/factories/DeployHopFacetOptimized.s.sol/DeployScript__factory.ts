/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployHopFacetOptimized.s.sol/DeployScript";

const _abi = [
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
        internalType: "contract HopFacetOptimized",
        name: "deployed",
        type: "address",
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

const _bytecode =
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b506040805180820182526011815270121bdc119858d95d13dc1d1a5b5a5e9959607a1b60208201529051634bca482160e11b815260008051602062003a278339815191529063979490429062000096906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000dc919062000585565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003a278339815191529063ffa18649906024016020604051808303816000875af115801562000133573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015991906200059f565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003a278339815191529063350d56bf906064016020604051808303816000875af1158015620001f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021d91906200059f565b60405163f877cb1960e01b815290915060009060008051602062003a278339815191529063f877cb19906200026d9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b791908101906200060d565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000323573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034d91908101906200060d565b6006906200035c908262000754565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003a278339815191529063f877cb19906064016000604051808303816000875af1158015620003c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003ec91908101906200060d565b600790620003fb908262000754565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003a278339815191529063f877cb19906064016000604051808303816000875af115801562000465573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048f91908101906200060d565b6008906200049e908262000754565b508083604051602001620004b492919062000820565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000535573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055b91906200059f565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000853915050565b6000602082840312156200059857600080fd5b5051919050565b600060208284031215620005b257600080fd5b81516001600160a01b0381168114620005ca57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000604578181015183820152602001620005ea565b50506000910152565b6000602082840312156200062057600080fd5b81516001600160401b03808211156200063857600080fd5b818401915084601f8301126200064d57600080fd5b815181811115620006625762000662620005d1565b604051601f8201601f19908116603f011681019083821181831017156200068d576200068d620005d1565b81604052828152876020848701011115620006a757600080fd5b620006ba836020830160208801620005e7565b979650505050505050565b600181811c90821680620006da57607f821691505b602082108103620006fb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074f57600081815260208120601f850160051c810160208610156200072a5750805b601f850160051c820191505b818110156200074b5782815560010162000736565b5050505b505050565b81516001600160401b03811115620007705762000770620005d1565b6200078881620007818454620006c5565b8462000701565b602080601f831160018114620007c05760008415620007a75750858301515b600019600386901b1c1916600185901b1785556200074b565b600085815260208120601f198616915b82811015620007f157888601518255948401946001909101908401620007d0565b5085821015620008105787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000834818460208801620005e7565b8351908301906200084a818360208801620005e7565b01949350505050565b6131c480620008636000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b612e1b8061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b50612dfb806100206000396000f3fe6080604052600436106100955760003560e01c80636721556d11610069578063826149971161004e5780638261499714610142578063df55e12614610155578063e62534161461016857600080fd5b80636721556d1461010f578063787f2d0e1461012f57600080fd5b8062d2aed61461009a5780630680ded4146100bc5780632b53e8f3146100dc5780634db91a00146100fc575b600080fd5b3480156100a657600080fd5b506100ba6100b53660046124cb565b610188565b005b3480156100c857600080fd5b506100ba6100d7366004612613565b6102c4565b3480156100e857600080fd5b506100ba6100f736600461267f565b61035f565b6100ba61010a36600461267f565b6104aa565b34801561011b57600080fd5b506100ba61012a3660046124cb565b6105cf565b6100ba61013d36600461267f565b610690565b6100ba6101503660046124cb565b610767565b6100ba6101633660046124cb565b610888565b34801561017457600080fd5b506100ba61018336600461267f565b610959565b61019d84600001518560c00151858533610a3e565b60c0808601919091526101b590820160a083016126d4565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b290610104015b600060405180830381600087803b15801561026f57600080fd5b505af1158015610283573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516102b6919061275f565b60405180910390a150505050565b60005b83811015610358576103468383838181106102e4576102e4612877565b90506020020160208101906102f991906126d4565b86868481811061030b5761030b612877565b905060200201602081019061032091906126d4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b86565b80610350816128d5565b9150506102c7565b5050505050565b61037e61037260a08401608085016126d4565b33308560c00135610cd1565b61038e60c0820160a083016126d4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f560e08401356103be60c0860160a087016126d4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff16602482015260c085013560448201526060840135606482015260808401356084820152600060a4820181905260c482015260e4015b600060405180830381600087803b15801561045757600080fd5b505af115801561046b573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161049e91906129ba565b60405180910390a15050565b6104ba60c0820160a083016126d4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f560c0840180359060e0860135906104ef9060a088016126d4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff16602482015260c086013560448201526060850135606482015260808501356084820152600060a4820181905260c482015260e4015b6000604051808303818588803b15801561058757600080fd5b505af115801561059b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161049e91906129ba565b6105e484600001518560c00151858533610a3e565b60c0808601919091526105fc90820160a083016126d4565b60e085015160a086015160c08701516040517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301526060840135606483015260808401356084830152600060a4830181905260c4830152919091169063deace8f59060e401610255565b6106a060c0820160a083016126d4565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106d59060a088016126d4565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e48201526101040161056e565b61077c84600001518560c00151858533610a3e565b60c08086019190915261079490820160a083016126d4565b60c085015160e086015160a08701516040517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff9081166024830152604482018390526060850135606483015260808501356084830152600060a4830181905260c4830152929092169163deace8f5919060e4015b6000604051808303818588803b15801561084057600080fd5b505af1158015610854573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516102b6919061275f565b61089d84600001518560c00151858533610a3e565b60c0808601919091526108b590820160a083016126d4565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b2919061010401610827565b61096c61037260a08401608085016126d4565b61097c60c0820160a083016126d4565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e08401356109ac60c0860160a087016126d4565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e48201526101040161043d565b600082808203610a7a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a89600185612b03565b818110610a9857610a98612877565b9050602002810190610aaa9190612b16565b610abb9060808101906060016126d4565b90506000610ac882610eeb565b905073ffffffffffffffffffffffffffffffffffffffff8216610af257610aef3482612b03565b90505b6000610afe8888610fa4565b9050610b0a88886110b0565b610b178a89898985611116565b600082610b2385610eeb565b610b2d9190612b03565b905089811015610b78576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bf3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8d9190612b54565b905081811015610ccb57610ccb8484610cc6847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b03565b6114c8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8416610d1e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d6b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ddc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e009190612b54565b9050610e0e82868686611644565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea29190612b54565b610eac9190612b03565b14610ee3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610f9c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f979190612b54565b610f9e565b475b92915050565b60608160008167ffffffffffffffff811115610fc257610fc26122b2565b604051908082528060200260200182016040528015610feb578160200160208202803683370190505b5090506000805b838110156110a55786868281811061100c5761100c612877565b905060200281019061101e9190612b16565b61102f9060808101906060016126d4565b915061103a82610eeb565b83828151811061104c5761104c612877565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661109d573483828151811061108557611085612877565b602002602001018181516110999190612b03565b9052505b600101610ff2565b509095945050505050565b60005b818110156111115760008383838181106110cf576110cf612877565b90506020028101906110e19190612b16565b6110ea90612b6d565b90508060c001511561110857611108816040015182608001516116a2565b506001016110b3565b505050565b8383838382600181146113e35760008585611132600185612b03565b81811061114157611141612877565b90506020028101906111539190612b16565b6111649060808101906060016126d4565b9050600089815b8181101561130f57368d8d8381811061118657611186612877565b90506020028101906111989190612b16565b90506111c76111ad60608301604084016126d4565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061122a575061122a6111e060408301602084016126d4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561124157506112416111e060208301836126d4565b80156112c657506112c661125860a0830183612c12565b61126791600491600091612c77565b61127091612ca1565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112fc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113068f82611818565b5060010161116b565b505060005b61131f600185612b03565b8110156113db57600088888381811061133a5761133a612877565b905060200281019061134c9190612b16565b61135d9060808101906060016126d4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113d2578582815181106113a4576113a4612877565b60200260200101516113b582610eeb565b6113bf9190612b03565b925082156113d2576113d2818885611b2e565b50600101611314565b5050506114bc565b8760005b818110156114b957368b8b8381811061140257611402612877565b90506020028101906114149190612b16565b90506114296111ad60608301604084016126d4565b8061144257506114426111e060408301602084016126d4565b801561145957506114596111e060208301836126d4565b8015611470575061147061125860a0830183612c12565b6114a6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114b08d82611818565b506001016113e7565b50505b50505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561153f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115639190612b54565b61156d9190612ce9565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610ccb9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b5f565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ccb9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115c2565b73ffffffffffffffffffffffffffffffffffffffff82166116fb57803410156116f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003611735576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156117a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c69190612b54565b90508181101561180c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b6f565b61111183333085610cd1565b61182e61182860208301836126d4565b3b151590565b611864576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118a4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118b96111ad60608501604086016126d4565b6118c45760006118ca565b82608001355b905060006118e66118e160608601604087016126d4565b610eeb565b905060006118fd6118e160808701606088016126d4565b9050826000036119345761193461191a60608701604088016126d4565b61192a60408801602089016126d4565b8760800135610b86565b846080013582101561197f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610b6f565b60008061198f60208801886126d4565b73ffffffffffffffffffffffffffffffffffffffff16856119b360a08a018a612c12565b6040516119c1929190612cfc565b60006040518083038185875af1925050503d80600081146119fe576040519150601f19603f3d011682016040523d82523d6000602084013e611a03565b606091505b509150915081611a4e576000611a1882611c6b565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6f9190612d0c565b6000611a636118e160808a0160608b016126d4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a9460208b018b6126d4565b611aa460608c0160408d016126d4565b611ab460808d0160608e016126d4565b8c60800135898711611ac65786611ad0565b611ad08a88612b03565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615611b5557611111838383611ce9565b6111118282611e18565b6000611bc1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f429092919063ffffffff16565b8051909150156111115780806020019051810190611bdf9190612d1f565b611111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b6f565b6060604482511015611cb057505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ccc6004808551611cc49190612b03565b859190611f59565b905080806020019051810190611ce29190612d3c565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8316611d36576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611da3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc79190612b54565b905080821115611e0d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b6f565b610ccb848484612073565b73ffffffffffffffffffffffffffffffffffffffff8216611e65576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611ea8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b6f565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611f02576040519150601f19603f3d011682016040523d82523d6000602084013e611f07565b606091505b5050905080611111576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060611f5184846000856120c9565b949350505050565b606081611f6781601f612ce9565b1015611f9f576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611fa98284612ce9565b84511015611fe3576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015612002576040519150600082526020820160405261206a565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561203b578051835260209283019201612023565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111119084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115c2565b60608247101561215b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b6f565b73ffffffffffffffffffffffffffffffffffffffff85163b6121d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b6f565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122029190612db3565b60006040518083038185875af1925050503d806000811461223f576040519150601f19603f3d011682016040523d82523d6000602084013e612244565b606091505b509150915061225482828661225f565b979650505050505050565b6060831561226e575081611ce2565b82511561227e5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6f9190612d0c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612305576123056122b2565b60405290565b60405160e0810167ffffffffffffffff81118282101715612305576123056122b2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612375576123756122b2565b604052919050565b600067ffffffffffffffff821115612397576123976122b2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126123d457600080fd5b81356123e76123e28261237d565b61232e565b8181528460208386010111156123fc57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461243b57600080fd5b50565b803561244981612419565b919050565b801515811461243b57600080fd5b80356124498161244e565b60008083601f84011261247957600080fd5b50813567ffffffffffffffff81111561249157600080fd5b6020830191508360208260051b85010111156124ac57600080fd5b9250929050565b600060c082840312156124c557600080fd5b50919050565b6000806000806101008086880312156124e357600080fd5b853567ffffffffffffffff808211156124fb57600080fd5b90870190610140828a03121561251057600080fd5b6125186122e1565b8235815260208301358281111561252e57600080fd5b61253a8b8286016123c3565b60208301525060408301358281111561255257600080fd5b61255e8b8286016123c3565b6040830152506125706060840161243e565b60608201526125816080840161243e565b608082015261259260a0840161243e565b60a082015260c083013560c082015260e083013560e08201526125b684840161245c565b8482015261012093506125ca84840161245c565b848201528097505060208801359250808311156125e657600080fd5b50506125f487828801612467565b9094509250612608905086604087016124b3565b905092959194509250565b6000806000806040858703121561262957600080fd5b843567ffffffffffffffff8082111561264157600080fd5b61264d88838901612467565b9096509450602087013591508082111561266657600080fd5b5061267387828801612467565b95989497509550505050565b60008060e0838503121561269257600080fd5b823567ffffffffffffffff8111156126a957600080fd5b830161014081860312156126bc57600080fd5b91506126cb84602085016124b3565b90509250929050565b6000602082840312156126e657600080fd5b8135611ce281612419565b60005b8381101561270c5781810151838201526020016126f4565b50506000910152565b6000815180845261272d8160208601602086016126f1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612788610160850183612715565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127c38382612715565b92505060608501516127ed608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128608187018315159052565b8601518015158387015290505b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612906576129066128a6565b5060010190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261294257600080fd5b830160208101925035905067ffffffffffffffff81111561296257600080fd5b8036038213156124ac57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081528135602082015260006129d4602084018461290d565b6101408060408601526129ec61016086018385612971565b92506129fb604087018761290d565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868503016060870152612a32848483612971565b935050612a416060870161243e565b73ffffffffffffffffffffffffffffffffffffffff811660808701529150612a6b6080870161243e565b73ffffffffffffffffffffffffffffffffffffffff811660a08701529150612a9560a0870161243e565b73ffffffffffffffffffffffffffffffffffffffff811660c0870152915060c086013560e0860152610100915060e086013582860152612ad682870161245c565b9150610120612ae88187018415159052565b612af381880161245c565b92505061286d8186018315159052565b81810381811115610f9e57610f9e6128a6565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612b4a57600080fd5b9190910192915050565b600060208284031215612b6657600080fd5b5051919050565b600060e08236031215612b7f57600080fd5b612b8761230b565b612b908361243e565b8152612b9e6020840161243e565b6020820152612baf6040840161243e565b6040820152612bc06060840161243e565b60608201526080830135608082015260a083013567ffffffffffffffff811115612be957600080fd5b612bf5368286016123c3565b60a083015250612c0760c0840161245c565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612c4757600080fd5b83018035915067ffffffffffffffff821115612c6257600080fd5b6020019150368190038213156124ac57600080fd5b60008085851115612c8757600080fd5b83861115612c9457600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ce15780818660040360031b1b83161692505b505092915050565b80820180821115610f9e57610f9e6128a6565b8183823760009101908152919050565b602081526000611ce26020830184612715565b600060208284031215612d3157600080fd5b8151611ce28161244e565b600060208284031215612d4e57600080fd5b815167ffffffffffffffff811115612d6557600080fd5b8201601f81018413612d7657600080fd5b8051612d846123e28261237d565b818152856020838501011115612d9957600080fd5b612daa8260208301602086016126f1565b95945050505050565b60008251612b4a8184602087016126f156fea2646970667358221220d5c60904373c272a23cf279a59eb42a88d6497ff8f5e9e619305e026afa2804764736f6c63430008110033a2646970667358221220d726ccd367be2390e0c7dda954e38b047971b9da282ab549a86e7fbbdf823e5a64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

type DeployScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployScriptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployScript__factory extends ContractFactory {
  constructor(...args: DeployScriptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeployScript> {
    return super.deploy(overrides || {}) as Promise<DeployScript>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployScript {
    return super.attach(address) as DeployScript;
  }
  override connect(signer: Signer): DeployScript__factory {
    return super.connect(signer) as DeployScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployScriptInterface {
    return new utils.Interface(_abi) as DeployScriptInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployScript {
    return new Contract(address, _abi, signerOrProvider) as DeployScript;
  }
}
