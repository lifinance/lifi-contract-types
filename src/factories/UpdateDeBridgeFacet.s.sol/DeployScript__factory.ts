/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../UpdateDeBridgeFacet.s.sol/DeployScript";

const _abi = [
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

const _bytecode =
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b604482015260008051602062002159833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae91906200045c565b600490815560408051636c98507360e11b81529051600080516020620021598339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012891908101906200052e565b60059062000137908262000612565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620021598339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c791908101906200052e565b600690620001d6908262000612565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620021598339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a91908101906200052e565b60079062000279908262000612565b506000600560066007604051602001620002969392919062000759565b60408051601f19818403018152908290526360f9bb1160e01b8252915060009060008051602062002159833981519152906360f9bb1190620002dd908590600401620007e6565b6000604051808303816000875af1158015620002fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200032791908101906200052e565b9050620003676040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b81525082620003bd60201b6200089f1790919060201c565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b031992831681179091556003805490921617905550620008589050565b6040516385940ef160e01b815260009060008051602062002159833981519152906385940ef190620003f69086908690600401620007fb565b6000604051808303816000875af115801562000416573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200044091908101906200052e565b8060200190518101906200045591906200082d565b9392505050565b6000602082840312156200046f57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004a95781810151838201526020016200048f565b50506000910152565b60006001600160401b0380841115620004cf57620004cf62000476565b604051601f8501601f19908116603f01168101908282118183101715620004fa57620004fa62000476565b816040528093508581528686860111156200051457600080fd5b620005248660208301876200048c565b5050509392505050565b6000602082840312156200054157600080fd5b81516001600160401b038111156200055857600080fd5b8201601f810184136200056a57600080fd5b6200057b84825160208401620004b2565b949350505050565b600181811c908216806200059857607f821691505b602082108103620005b957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200060d57600081815260208120601f850160051c81016020861015620005e85750805b601f850160051c820191505b818110156200060957828155600101620005f4565b5050505b505050565b81516001600160401b038111156200062e576200062e62000476565b62000646816200063f845462000583565b84620005bf565b602080601f8311600181146200067e5760008415620006655750858301515b600019600386901b1c1916600185901b17855562000609565b600085815260208120601f198616915b82811015620006af578886015182559484019460019091019084016200068e565b5085821015620006ce5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154620006ed8162000583565b600182811680156200070857600181146200071e576200074f565b60ff19841687528215158302870194506200074f565b8560005260208060002060005b85811015620007465781548a8201529084019082016200072b565b50505082870194505b5050505092915050565b6000620007678286620006de565b6c2f6465706c6f796d656e74732f60981b815262000789600d820186620006de565b9050601760f91b8152620007a16001820185620006de565b633539b7b760e11b81526004019695505050505050565b60008151808452620007d28160208601602086016200048c565b601f01601f19169290920160200192915050565b602081526000620004556020830184620007b8565b604081526000620008106040830185620007b8565b8281036020840152620008248185620007b8565b95945050505050565b6000602082840312156200084057600080fd5b81516001600160a01b03811681146200045557600080fd5b6118f180620008686000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100cf575b600080fd5b61006461005f366004610cc0565b6100ec565b6040516100719190610d52565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f1565b6040516100719190610d65565b6000546100dc9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061014557610145610dee565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a8576101a8610dee565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102ea5761020b60108583600481106101fa576101fa610dee565b6102069291901a610e7b565b610975565b82610217836002610e9d565b610222906002610eb4565b8151811061023257610232610dee565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610284601085836004811061027857610278610dee565b6102069291901a610ec7565b82610290836002610e9d565b61029b906003610eb4565b815181106102ab576102ab610dee565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e381610ee9565b90506101da565b5092915050565b6060600060056006600760405160200161030d93929190610ff5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb119061038e908590600401610d52565b6000604051808303816000875af11580156103ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f3919081019061114f565b9050600061043f6040518060400160405280600e81526020017f2e446542726964676546616365740000000000000000000000000000000000008152508361089f90919063ffffffff16565b600480546040517fce817d4700000000000000000000000000000000000000000000000000000000815291820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b50506003546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152909116925063adfca15e9150602401600060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261057791908101906111c4565b5160000361075b5760408051606081810190925273ffffffffffffffffffffffffffffffffffffffff8316815260019060208101600081526020016105f16040518060400160405280600d81526020017f4465427269646765466163657400000000000000000000000000000000000000815250856109ca565b90528154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156106aa576106aa611263565b0217905550604082015180516106ca916001840191602090910190610bce565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c9061072790600190600090600401611292565b600060405180830381600087803b15801561074157600080fd5b505af1158015610755573d6000803e3d6000fd5b50505050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156107c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261080e91908101906116d8565b93507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561088157600080fd5b505af1158015610895573d6000803e3d6000fd5b5050505050505090565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906108f49086908690600401611767565b6000604051808303816000875af1158015610913573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610959919081019061114f565b80602001905181019061096c9190611795565b90505b92915050565b600060098260ff16116109965761098d8260306117b2565b60f81b92915050565b8160ff16600a111580156109ae5750600f8260ff1611155b1561004c57600a6109c08360616117b2565b61098d91906117cb565b6040805160038082526080820190925260609160009190816020015b60608152602001906001900390816109e65790505090506040518060400160405280601d81526020017f736372697074732f636f6e74726163742d73656c6563746f72732e736800000081525081600081518110610a4657610a46610dee565b60200260200101819052508381600181518110610a6557610a65610dee565b6020026020010181905250606060005b8451811015610ad65781610aa1868381518110610a9457610a94610dee565b60200260200101516100ec565b604051602001610ab29291906117e4565b60405160208183030381529060405291508080610ace90610ee9565b915050610a75565b508082600281518110610aeb57610aeb610dee565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610b4990869060040161183b565b6000604051808303816000875af1158015610b68573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bae919081019061114f565b905080806020019051810190610bc491906111c4565b9695505050505050565b82805482825590600052602060002090600701600890048101928215610c6a5791602002820160005b83821115610c3857835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610bf7565b8015610c685782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610c38565b505b50610c76929150610c7a565b5090565b5b80821115610c765760008155600101610c7b565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610cbd57600080fd5b50565b600060208284031215610cd257600080fd5b8135610cdd81610c8f565b9392505050565b60005b83811015610cff578181015183820152602001610ce7565b50506000910152565b60008151808452610d20816020860160208601610ce4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061096c6020830184610d08565b6020808252825182820181905260009190848201906040850190845b81811015610db357835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610d81565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff831680610e8e57610e8e610e1d565b8060ff84160491505092915050565b808202811582820484141761096f5761096f610e4c565b8082018082111561096f5761096f610e4c565b600060ff831680610eda57610eda610e1d565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f1a57610f1a610e4c565b5060010190565b8054600090600181811c9080831680610f3b57607f831692505b60208084108203610f75577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b818015610f895760018114610fbc57610fe9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650610fe9565b60008881526020902060005b86811015610fe15781548b820152908501908301610fc8565b505084890196505b50505050505092915050565b60006110018286610f21565b7f2f6465706c6f796d656e74732f000000000000000000000000000000000000008152611031600d820186610f21565b90507f2e0000000000000000000000000000000000000000000000000000000000000081526110636001820185610f21565b7f6a736f6e0000000000000000000000000000000000000000000000000000000081526004019695505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156110da576110da610dbf565b604052919050565b600067ffffffffffffffff8311156110fc576110fc610dbf565b61112d60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601611093565b905082815283838301111561114157600080fd5b610cdd836020830184610ce4565b60006020828403121561116157600080fd5b815167ffffffffffffffff81111561117857600080fd5b8201601f8101841361118957600080fd5b611198848251602084016110e2565b949350505050565b600067ffffffffffffffff8211156111ba576111ba610dbf565b5060051b60200190565b600060208083850312156111d757600080fd5b825167ffffffffffffffff8111156111ee57600080fd5b8301601f810185136111ff57600080fd5b805161121261120d826111a0565b611093565b81815260059190911b8201830190838101908783111561123157600080fd5b928401925b8284101561125857835161124981610c8f565b82529284019290840190611236565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201845480825260808401915060808160051b8501018660005260208060002060005b84811015611684578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110611349577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b8060078401101561149d5784546113a7838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b8116606085015261141e60808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b61145160a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e083015293830193600892909201916101009091019061136c565b935493808310156114df576114d6828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156115195760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156115535760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561158d57608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156115c757606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561160157604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156116395784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561166b577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b50988601989650505060029290920191506001016112bd565b505073ffffffffffffffffffffffffffffffffffffffff87169086015284810360408601526000815260208101611258565b73ffffffffffffffffffffffffffffffffffffffff81168114610cbd57600080fd5b600060208083850312156116eb57600080fd5b825167ffffffffffffffff81111561170257600080fd5b8301601f8101851361171357600080fd5b805161172161120d826111a0565b81815260059190911b8201830190838101908783111561174057600080fd5b928401925b82841015611258578351611758816116b6565b82529284019290840190611745565b60408152600061177a6040830185610d08565b828103602084015261178c8185610d08565b95945050505050565b6000602082840312156117a757600080fd5b8151610cdd816116b6565b60ff818116838216019081111561096f5761096f610e4c565b60ff828116828216039081111561096f5761096f610e4c565b600083516117f6818460208801610ce4565b83519083019061180a818360208801610ce4565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156118ae577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845261189c858351610d08565b94509285019290850190600101611862565b509297965050505050505056fea264697066735822122035f2fb0f874c90a498bf3baa4568853168eb7094278f474a262e9547e50e12de64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
