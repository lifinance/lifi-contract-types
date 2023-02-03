/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployWithdrawFacet.s.sol/DeployScript";

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
        internalType: "contract WithdrawFacet",
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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600d81526c15da5d1a191c985dd19858d95d609a1b60208201529051634bca482160e11b8152600080516020620017928339815191529063979490429062000092906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d8919062000581565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620017928339815191529063ffa18649906024016020604051808303816000875af11580156200012f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015591906200059b565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620017928339815191529063350d56bf906064016020604051808303816000875af1158015620001f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021991906200059b565b60405163f877cb1960e01b8152909150600090600080516020620017928339815191529063f877cb1990620002699060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000289573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b3919081019062000609565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000349919081019062000609565b60069062000358908262000750565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620017928339815191529063f877cb19906064016000604051808303816000875af1158015620003be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e8919081019062000609565b600790620003f7908262000750565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620017928339815191529063f877cb19906064016000604051808303816000875af115801562000461573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048b919081019062000609565b6008906200049a908262000750565b508083604051602001620004b09291906200081c565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055791906200059b565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084f915050565b6000602082840312156200059457600080fd5b5051919050565b600060208284031215620005ae57600080fd5b81516001600160a01b0381168114620005c657600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000600578181015183820152602001620005e6565b50506000910152565b6000602082840312156200061c57600080fd5b81516001600160401b03808211156200063457600080fd5b818401915084601f8301126200064957600080fd5b8151818111156200065e576200065e620005cd565b604051601f8201601f19908116603f01168101908382118183101715620006895762000689620005cd565b81604052828152876020848701011115620006a357600080fd5b620006b6836020830160208801620005e3565b979650505050505050565b600181811c90821680620006d657607f821691505b602082108103620006f757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074b57600081815260208120601f850160051c81016020861015620007265750805b601f850160051c820191505b81811015620007475782815560010162000732565b5050505b505050565b81516001600160401b038111156200076c576200076c620005cd565b62000784816200077d8454620006c1565b84620006fd565b602080601f831160018114620007bc5760008415620007a35750858301515b600019600386901b1c1916600185901b17855562000747565b600085815260208120601f198616915b82811015620007ed57888601518255948401946001909101908401620007cc565b50858210156200080c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000830818460208801620005e3565b83519083019062000846818360208801620005e3565b01949350505050565b610f33806200085f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b610b8a8061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b50610b6a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e610049366004610966565b610063565b005b61004e61005e366004610a17565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fc565b6000863b1515806100e6576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010d929190610a58565b6000604051808303816000865af19150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b5090925050811561016a5761016585858561029c565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361029c565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610299576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c057826102c2565b335b90506102cf848284610328565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83161561034f576101f7838383610359565b6101f78282610493565b73ffffffffffffffffffffffffffffffffffffffff83166103a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610a68565b905080821115610482576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61048d8484846105bd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166104e0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610523576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610479565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461057d576040519150601f19603f3d011682016040523d82523d6000602084013e610582565b606091505b50509050806101f7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101f792869291600091610688918516908490610732565b8051909150156101f757808060200190518101906106a69190610a81565b6101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610479565b6060610741848460008561074b565b90505b9392505050565b6060824710156107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610479565b73ffffffffffffffffffffffffffffffffffffffff85163b61085b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610479565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108849190610ac7565b60006040518083038185875af1925050503d80600081146108c1576040519150601f19603f3d011682016040523d82523d6000602084013e6108c6565b606091505b50915091506108d68282866108e1565b979650505050505050565b606083156108f0575081610744565b8251156109005782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104799190610ae3565b73ffffffffffffffffffffffffffffffffffffffff8116811461029957600080fd5b803561096181610934565b919050565b60008060008060008060a0878903121561097f57600080fd5b863561098a81610934565b9550602087013567ffffffffffffffff808211156109a757600080fd5b818901915089601f8301126109bb57600080fd5b8135818111156109ca57600080fd5b8a60208285010111156109dc57600080fd5b60208301975080965050505060408701356109f681610934565b9250610a0460608801610956565b9150608087013590509295509295509295565b600080600060608486031215610a2c57600080fd5b8335610a3781610934565b92506020840135610a4781610934565b929592945050506040919091013590565b8183823760009101908152919050565b600060208284031215610a7a57600080fd5b5051919050565b600060208284031215610a9357600080fd5b8151801515811461074457600080fd5b60005b83811015610abe578181015183820152602001610aa6565b50506000910152565b60008251610ad9818460208701610aa3565b9190910192915050565b6020815260008251806020840152610b02816040850160208701610aa3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212200f5ec7ded40198b244ba6ac4c612b45c62a58001f0a1ad6a6283ba233ae2d8e664736f6c63430008110033a2646970667358221220867afca7f72b6b8487b68ffef4e49f06c999f4f16806389a9725b33da9056eb764736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
