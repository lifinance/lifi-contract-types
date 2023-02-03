/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../UpdateMultichainFacet.s.sol/DeployScript";

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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b604482015260008051602062002602833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae91906200045c565b600490815560408051636c98507360e11b81529051600080516020620026028339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012891908101906200052e565b60059062000137908262000612565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620026028339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c791908101906200052e565b600690620001d6908262000612565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620026028339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a91908101906200052e565b60079062000279908262000612565b506000600560066007604051602001620002969392919062000759565b60408051601f19818403018152908290526360f9bb1160e01b8252915060009060008051602062002602833981519152906360f9bb1190620002dd908590600401620007e6565b6000604051808303816000875af1158015620002fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200032791908101906200052e565b9050620003676040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b81525082620003bd60201b62000b421790919060201c565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b031992831681179091556003805490921617905550620008589050565b6040516385940ef160e01b815260009060008051602062002602833981519152906385940ef190620003f69086908690600401620007fb565b6000604051808303816000875af115801562000416573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200044091908101906200052e565b8060200190518101906200045591906200082d565b9392505050565b6000602082840312156200046f57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004a95781810151838201526020016200048f565b50506000910152565b60006001600160401b0380841115620004cf57620004cf62000476565b604051601f8501601f19908116603f01168101908282118183101715620004fa57620004fa62000476565b816040528093508581528686860111156200051457600080fd5b620005248660208301876200048c565b5050509392505050565b6000602082840312156200054157600080fd5b81516001600160401b038111156200055857600080fd5b8201601f810184136200056a57600080fd5b6200057b84825160208401620004b2565b949350505050565b600181811c908216806200059857607f821691505b602082108103620005b957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200060d57600081815260208120601f850160051c81016020861015620005e85750805b601f850160051c820191505b818110156200060957828155600101620005f4565b5050505b505050565b81516001600160401b038111156200062e576200062e62000476565b62000646816200063f845462000583565b84620005bf565b602080601f8311600181146200067e5760008415620006655750858301515b600019600386901b1c1916600185901b17855562000609565b600085815260208120601f198616915b82811015620006af578886015182559484019460019091019084016200068e565b5085821015620006ce5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154620006ed8162000583565b600182811680156200070857600181146200071e576200074f565b60ff19841687528215158302870194506200074f565b8560005260208060002060005b85811015620007465781548a8201529084019082016200072b565b50505082870194505b5050505092915050565b6000620007678286620006de565b6c2f6465706c6f796d656e74732f60981b815262000789600d820186620006de565b9050601760f91b8152620007a16001820185620006de565b633539b7b760e11b81526004019695505050505050565b60008151808452620007d28160208601602086016200048c565b601f01601f19169290920160200192915050565b602081526000620004556020830184620007b8565b604081526000620008106040830185620007b8565b8281036020840152620008248185620007b8565b95945050505050565b6000602082840312156200084057600080fd5b81516001600160a01b03811681146200045557600080fd5b611d9a80620008686000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100cf575b600080fd5b61006461005f366004611030565b6100ec565b60405161007191906110c2565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f1565b6040516100719190611126565b6000546100dc9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061014557610145611168565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a8576101a8611168565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102ea5761020b60108583600481106101fa576101fa611168565b6102069291901a6111f5565b610c18565b82610217836002611217565b61022290600261122e565b8151811061023257610232611168565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610284601085836004811061027857610278611168565b6102069291901a611241565b82610290836002611217565b61029b90600361122e565b815181106102ab576102ab611168565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e381611263565b90506101da565b5092915050565b6060600060056006600760405160200161030d9392919061136f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb119061038e9085906004016110c2565b6000604051808303816000875af11580156103ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f391908101906114c9565b9050600061043f6040518060400160405280601081526020017f2e4d756c7469636861696e46616365740000000000000000000000000000000081525083610b4290919063ffffffff16565b90506005604051602001610453919061151a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529350737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906104d19086906004016110c2565b6000604051808303816000875af11580156104f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261053691908101906114c9565b91506000610584600660405160200161054f9190611553565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528490610c6d565b905060006105d2600660405160200161059d91906115b2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528590610b42565b9050600063dfd8309060e01b82846040516024016105f1929190611611565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092526004805492517fce817d47000000000000000000000000000000000000000000000000000000008152919350737109709ecfa91a80626ff3989d68f67f5b1dd12d9263ce817d47926106c4920190815260200190565b600060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b50506003546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116925063adfca15e9150602401600060405180830381865afa158015610766573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107ac9190810190611664565b516000036109fb576040805160018082528183019092526000916020808301908036833701905050905063dfd8309060e01b816000815181106107f1576107f1611168565b7fffffffff00000000000000000000000000000000000000000000000000000000909216602092830291909101820152604080516060810190915273ffffffffffffffffffffffffffffffffffffffff871681526001918101600081526020016108906040518060400160405280600f81526020017f4d756c7469636861696e4661636574000000000000000000000000000000000081525085610d3a565b90528154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff00000000000000000000000000000000000000000016909117907401000000000000000000000000000000000000000090849081111561094957610949611703565b021790555060408201518051610969916001840191602090910190610f3e565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c906109c79060019089908790600401611732565b600060405180830381600087803b1580156109e157600080fd5b505af11580156109f5573d6000803e3d6000fd5b50505050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a68573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610aae9190810190611b81565b96507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b2157600080fd5b505af1158015610b35573d6000803e3d6000fd5b5050505050505050505090565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610b979086908690600401611c10565b6000604051808303816000875af1158015610bb6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bfc91908101906114c9565b806020019051810190610c0f9190611c3e565b90505b92915050565b600060098260ff1611610c3957610c30826030611c5b565b60f81b92915050565b8160ff16600a11158015610c515750600f8260ff1611155b1561004c57600a610c63836061611c5b565b610c309190611c74565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152606090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610cc29086908690600401611c10565b6000604051808303816000875af1158015610ce1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d2791908101906114c9565b806020019051810190610c0f9190611b81565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081610d565790505090506040518060400160405280601d81526020017f736372697074732f636f6e74726163742d73656c6563746f72732e736800000081525081600081518110610db657610db6611168565b60200260200101819052508381600181518110610dd557610dd5611168565b6020026020010181905250606060005b8451811015610e465781610e11868381518110610e0457610e04611168565b60200260200101516100ec565b604051602001610e22929190611c8d565b60405160208183030381529060405291508080610e3e90611263565b915050610de5565b508082600281518110610e5b57610e5b611168565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610eb9908690600401611ce4565b6000604051808303816000875af1158015610ed8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f1e91908101906114c9565b905080806020019051810190610f349190611664565b9695505050505050565b82805482825590600052602060002090600701600890048101928215610fda5791602002820160005b83821115610fa857835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610f67565b8015610fd85782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610fa8565b505b50610fe6929150610fea565b5090565b5b80821115610fe65760008155600101610feb565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461102d57600080fd5b50565b60006020828403121561104257600080fd5b813561104d81610fff565b9392505050565b60005b8381101561106f578181015183820152602001611057565b50506000910152565b60008151808452611090816020860160208601611054565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610c0f6020830184611078565b600081518084526020808501945080840160005b8381101561111b57815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016110e9565b509495945050505050565b602081526000610c0f60208301846110d5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff83168061120857611208611197565b8060ff84160491505092915050565b8082028115828204841417610c1257610c126111c6565b80820180821115610c1257610c126111c6565b600060ff83168061125457611254611197565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611294576112946111c6565b5060010190565b8054600090600181811c90808316806112b557607f831692505b602080841082036112ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b818015611303576001811461133657611363565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650611363565b60008881526020902060005b8681101561135b5781548b820152908501908301611342565b505084890196505b50505050505092915050565b600061137b828661129b565b7f2f6465706c6f796d656e74732f0000000000000000000000000000000000000081526113ab600d82018661129b565b90507f2e0000000000000000000000000000000000000000000000000000000000000081526113dd600182018561129b565b7f6a736f6e0000000000000000000000000000000000000000000000000000000081526004019695505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561145457611454611139565b604052919050565b600067ffffffffffffffff83111561147657611476611139565b6114a760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160161140d565b90508281528383830111156114bb57600080fd5b61104d836020830184611054565b6000602082840312156114db57600080fd5b815167ffffffffffffffff8111156114f257600080fd5b8201601f8101841361150357600080fd5b6115128482516020840161145c565b949350505050565b6000611526828461129b565b7f2f636f6e6669672f6d756c7469636861696e2e6a736f6e00000000000000000081526017019392505050565b7f2e0000000000000000000000000000000000000000000000000000000000000081526000611585600183018461129b565b7f2e726f757465727300000000000000000000000000000000000000000000000081526008019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006115e4600183018461129b565b7f2e616e794e6174697665000000000000000000000000000000000000000000008152600a019392505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061151260408301846110d5565b600067ffffffffffffffff82111561165a5761165a611139565b5060051b60200190565b6000602080838503121561167757600080fd5b825167ffffffffffffffff81111561168e57600080fd5b8301601f8101851361169f57600080fd5b80516116b26116ad82611640565b61140d565b81815260059190911b820183019083810190878311156116d157600080fd5b928401925b828410156116f85783516116e981610fff565b825292840192908401906116d6565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201855480825260808401915060808160051b8501018760005260208060002060005b84811015611b24578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff16600381106117e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b8060078401101561193d578454611847838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b811660608501526118be60808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b6118f160a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e083015293830193600892909201916101009091019061180c565b9354938083101561197f57611976828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156119b95760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156119f35760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611a2d57608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611a6757606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611aa157604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611ad95784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611b0b577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b509886019896505050600292909201915060010161175d565b505073ffffffffffffffffffffffffffffffffffffffff8816908601528481036040860152611b538187611078565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461102d57600080fd5b60006020808385031215611b9457600080fd5b825167ffffffffffffffff811115611bab57600080fd5b8301601f81018513611bbc57600080fd5b8051611bca6116ad82611640565b81815260059190911b82018301908381019087831115611be957600080fd5b928401925b828410156116f8578351611c0181611b5f565b82529284019290840190611bee565b604081526000611c236040830185611078565b8281036020840152611c358185611078565b95945050505050565b600060208284031215611c5057600080fd5b815161104d81611b5f565b60ff8181168382160190811115610c1257610c126111c6565b60ff8281168282160390811115610c1257610c126111c6565b60008351611c9f818460208801611054565b835190830190611cb3818360208801611054565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611d57577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611d45858351611078565b94509285019290850190600101611d0b565b509297965050505050505056fea2646970667358221220443a2b92f6c71c274344153e8de413ce1c092320d2d48d742c6275ee43afec6364736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
