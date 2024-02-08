/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../UpdateNonStandardSelectorsRegistryFacet.sol/DeployScript";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IS_TEST",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fromCode",
    inputs: [
      {
        name: "code",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "run",
    inputs: [],
    outputs: [
      {
        name: "facets",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "cutData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x608060405260048054600160ff1991821617909155600c805461ffff1916610101179055601b805490911690553480156200003957600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b60448201526000805160206200367f83398151915290639794904290606401602060405180830381865afa158015620000a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c791906200074c565b600d8190556040516001625e79b760e01b0319815260048101919091526000805160206200367f8339815191529063ffa1864990602401602060405180830381865afa1580156200011c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000142919062000766565b600e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b031663d930a0e66040518163ffffffff1660e01b8152600401600060405180830381865afa158015620001ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001f49190810190620007cd565b600f9062000203908262000914565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b60448201526000805160206200367f8339815191529063f877cb1990606401600060405180830381865afa15801562000267573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002919190810190620007cd565b601090620002a0908262000914565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b60448201526000805160206200367f8339815191529063f877cb1990606401600060405180830381865afa15801562000308573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003329190810190620007cd565b60119062000341908262000914565b50604051637ed1ec7d60e01b815260206004820152600f60248201526e1554d157d1115197d112505353d391608a1b60448201526000805160206200367f83398151915290637ed1ec7d90606401602060405180830381865afa158015620003ad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003d39190620009e0565b601b80549115156101000261ff001990921691909117905560408051634777f3cf60e01b81526004810191909152600c60448201526b1393d7d09493d05110d054d560a21b6064820152600060248201526000805160206200367f83398151915290634777f3cf906084016020604051808303816000875af11580156200045e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004849190620009e0565b601b805460ff1916911515919091179055604051620004af90600f9060109060119060200162000a7f565b60405160208183030381529060405260199081620004ce919062000914565b506040516360f9bb1160e01b81526000805160206200367f833981519152906360f9bb1190620005049060199060040162000ade565b600060405180830381865afa15801562000522573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200054c9190810190620007cd565b601a906200055b908262000914565b50601b54610100900460ff1662000653576200064d6040518060400160405280601581526020017f2e4c6946694469616d6f6e64496d6d757461626c650000000000000000000000815250601a8054620005b59062000885565b80601f0160208091040260200160405190810160405280929190818152602001828054620005e39062000885565b8015620006345780601f10620006085761010080835404028352916020019162000634565b820191906000526020600020905b8154815290600101906020018083116200061657829003601f168201915b5050505050620006c660201b620004771790919060201c565b6200068b565b6200068b6040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b815250601a8054620005b59062000885565b601280546001600160a01b03929092166001600160a01b03199283168117909155601780548316821790556018805490921617905562000bd1565b604051631e19e65760e01b81526000906000805160206200367f83398151915290631e19e65790620006ff908690869060040162000b9f565b6020604051808303816000875af11580156200071f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000745919062000766565b9392505050565b6000602082840312156200075f57600080fd5b5051919050565b6000602082840312156200077957600080fd5b81516001600160a01b03811681146200074557600080fd5b634e487b7160e01b600052604160045260246000fd5b60005b83811015620007c4578181015183820152602001620007aa565b50506000910152565b600060208284031215620007e057600080fd5b81516001600160401b0380821115620007f857600080fd5b818401915084601f8301126200080d57600080fd5b81518181111562000822576200082262000791565b604051601f8201601f19908116603f011681019083821181831017156200084d576200084d62000791565b816040528281528760208487010111156200086757600080fd5b6200087a836020830160208801620007a7565b979650505050505050565b600181811c908216806200089a57607f821691505b602082108103620008bb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200090f57600081815260208120601f850160051c81016020861015620008ea5750805b601f850160051c820191505b818110156200090b57828155600101620008f6565b5050505b505050565b81516001600160401b0381111562000930576200093062000791565b620009488162000941845462000885565b84620008c1565b602080601f831160018114620009805760008415620009675750858301515b600019600386901b1c1916600185901b1785556200090b565b600085815260208120601f198616915b82811015620009b15788860151825594840194600190910190840162000990565b5085821015620009d05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620009f357600080fd5b815180151581146200074557600080fd5b6000815462000a138162000885565b6001828116801562000a2e576001811462000a445762000a75565b60ff198416875282151583028701945062000a75565b8560005260208060002060005b8581101562000a6c5781548a82015290840190820162000a51565b50505082870194505b5050505092915050565b600062000a8d828662000a04565b6c2f6465706c6f796d656e74732f60981b815262000aaf600d82018662000a04565b9050601760f91b815262000ac7600182018562000a04565b633539b7b760e11b81526004019695505050505050565b600060208083526000845462000af48162000885565b8084870152604060018084166000811462000b18576001811462000b335762000b63565b60ff1985168984015283151560051b89018301955062000b63565b896000528660002060005b8581101562000b5b5781548b820186015290830190880162000b3e565b8a0184019650505b509398975050505050505050565b6000815180845262000b8b816020860160208601620007a7565b601f01601f19169290920160200192915050565b60408152600062000bb4604083018562000b71565b828103602084015262000bc8818562000b71565b95945050505050565b612a9e8062000be16000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063c040622611610050578063c0406226146100ad578063f8ccbf47146100c3578063fa7626d4146100d057600080fd5b80632c0ad2ad1461006c578063ba414fa614610095575b600080fd5b61007f61007a366004611a20565b6100e2565b60405161008c9190611ab2565b60405180910390f35b61009d6102e7565b604051901515815260200161008c565b6100b561044b565b60405161008c929190611ac5565b600c5461009d9060ff1681565b600c5461009d90610100900460ff1681565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061013b5761013b611b57565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061019e5761019e611b57565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102e05761020160108583600481106101f0576101f0611b57565b6101fc9291901a611be4565b610518565b8261020d836002611c06565b610218906002611c1d565b8151811061022857610228611b57565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061027a601085836004811061026e5761026e611b57565b6101fc9291901a611c30565b82610286836002611c06565b610291906003611c1d565b815181106102a1576102a1611b57565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102d981611c52565b90506101d0565b5092915050565b600c5460009062010000900460ff161561030b5750600c5462010000900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156104465760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c65640000000000000000000000000000000000000000000000000000828401528251808303840181526060830190935260009290916103b0917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611c8a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526103e891611cd2565b6000604051808303816000865af19150503d8060008114610425576040519150601f19603f3d011682016040523d82523d6000602084013e61042a565b606091505b50915050808060200190518101906104429190611cee565b9150505b919050565b60608061046f604051806060016040528060218152602001612a486021913961056d565b915091509091565b6040517f1e19e657000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90631e19e657906104cc9086908690600401611d10565b6020604051808303816000875af11580156104eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f9190611d62565b90505b92915050565b600060098260ff161161053957610530826030611d7d565b60f81b92915050565b8160ff16600a111580156105515750600f8260ff1611155b1561006757600a610563836061611d7d565b6105309190611d96565b606080600061062e846040516020016105869190611daf565b604051602081830303815290604052601a80546105a290611df4565b80601f01602080910402602001604051908101604052809291908181526020018280546105ce90611df4565b801561061b5780601f106105f05761010080835404028352916020019161061b565b820191906000526020600020905b8154815290600101906020018083116105fe57829003601f168201915b505050505061047790919063ffffffff16565b90506060600061063c61096d565b905061065161064b8784610bf9565b84610de0565b601b5460ff161561071b576013541561071357631f931c1c60e01b6013600083511161067e576000610680565b845b8360405160240161069393929190611e76565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915293505b505050915091565b600d546040517fce817d470000000000000000000000000000000000000000000000000000000081526004810191909152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561078557600080fd5b505af1158015610799573d6000803e3d6000fd5b505060135415915061082d905057601754815173ffffffffffffffffffffffffffffffffffffffff90911690631f931c1c906013906107d95760006107db565b855b846040518463ffffffff1660e01b81526004016107fa93929190611e76565b600060405180830381600087803b15801561081457600080fd5b505af1158015610828573d6000803e3d6000fd5b505050505b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108e09190810190612316565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561094d57600080fd5b505af1158015610961573d6000803e3d6000fd5b50505050505050915091565b6060600f6040516020016109819190612444565b6040516020818303038152906040526019908161099e91906124cc565b506040517f60f9bb11000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906109f0906019906004016125e6565b600060405180830381865afa158015610a0d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a5391908101906126fc565b601a90610a6090826124cc565b506000610b206010604051602001610a78919061274d565b604051602081830303815290604052601a8054610a9490611df4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac090611df4565b8015610b0d5780601f10610ae257610100808354040283529160200191610b0d565b820191906000526020600020905b815481529060010190602001808311610af057829003601f168201915b505050505061187690919063ffffffff16565b9050600081806020019051810190610b38919061281b565b80516040519192506000917f37352cbd0000000000000000000000000000000000000000000000000000000091610b749160019060240161289e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152949350505050565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081610c15579050509050604051806060016040528060308152602001612a186030913981600081518110610c5857610c58611b57565b60200260200101819052508381600181518110610c7757610c77611b57565b6020026020010181905250606060005b8451811015610ce85781610cb3868381518110610ca657610ca6611b57565b60200260200101516100e2565b604051602001610cc492919061290b565b60405160208183030381529060405291508080610ce090611c52565b915050610c87565b508082600281518110610cfd57610cfd611b57565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610d5b908690600401612962565b6000604051808303816000875af1158015610d7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610dc091908101906126fc565b905080806020019051810190610dd691906129e2565b9695505050505050565b604080516000808252602082019283905290519091610e02916016919061192e565b506040805160008152602081019182905251610e209160149161192e565b506040805160008152602081019182905251610e3e9160159161192e565b5060005b83518110156111a357601854845160009173ffffffffffffffffffffffffffffffffffffffff169063cdffacc690879085908110610e8257610e82611b57565b60200260200101516040518263ffffffff1660e01b8152600401610ece91907fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b602060405180830381865afa158015610eeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0f9190611d62565b73ffffffffffffffffffffffffffffffffffffffff1603610f8d576016848281518110610f3e57610f3e611b57565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c91909102919091179055611191565b601854845173ffffffffffffffffffffffffffffffffffffffff80861692169063cdffacc690879085908110610fc557610fc5611b57565b60200260200101516040518263ffffffff1660e01b815260040161101191907fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b602060405180830381865afa15801561102e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110529190611d62565b73ffffffffffffffffffffffffffffffffffffffff161461119157601484828151811061108157611081611b57565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c91909102919091179055601854845173ffffffffffffffffffffffffffffffffffffffff9091169063cdffacc69086908490811061110157611101611b57565b60200260200101516040518263ffffffff1660e01b815260040161114d91907fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b602060405180830381865afa15801561116a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118e9190611d62565b91505b8061119b81611c52565b915050610e42565b506018546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152600092169063adfca15e90602401600060405180830381865afa158015611215573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261125b91908101906129e2565b905060005b8151811015611380576000805b86518110156113085786818151811061128857611288611b57565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168484815181106112c1576112c1611b57565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036112f65760019150611308565b8061130081611c52565b91505061126d565b508061136d57601583838151811061132257611322611b57565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c919091029190911790555b508061137881611c52565b915050611260565b506014541561152d57604080516060810190915273ffffffffffffffffffffffffffffffffffffffff841681526013906020810160018152602001601480548060200260200160405190810160405280929190818152602001828054801561144957602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116113f65790505b5050509190925250508154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff00000000000000000000000000000000000000000016909117907401000000000000000000000000000000000000000090849081111561150957611509611e47565b02179055506040820151805161152991600184019160209091019061192e565b5050505b601554156116c457604080516060810190915260008152601390602081016002815260200160158054806020026020016040519081016040528092919081815260200182805480156115e057602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001906004019060208260030104928301926001038202915080841161158d5790505b5050509190925250508154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156116a0576116a0611e47565b0217905550604082015180516116c091600184019160209091019061192e565b5050505b6016541561187057604080516060810190915273ffffffffffffffffffffffffffffffffffffffff841681526013906020810160008152602001601680548060200260200160405190810160405280929190818152602001828054801561178c57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116117395790505b5050509190925250508154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff00000000000000000000000000000000000000000016909117907401000000000000000000000000000000000000000090849081111561184c5761184c611e47565b02179055506040820151805161186c91600184019160209091019061192e565b5050505b50505050565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152606090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906118cb9086908690600401611d10565b600060405180830381865afa1580156118e8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261050f91908101906126fc565b828054828255906000526020600020906007016008900481019282156119ca5791602002820160005b8382111561199857835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611957565b80156119c85782816101000a81549063ffffffff0219169055600401602081600301049283019260010302611998565b505b506119d69291506119da565b5090565b5b808211156119d657600081556001016119db565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611a1d57600080fd5b50565b600060208284031215611a3257600080fd5b8135611a3d816119ef565b9392505050565b60005b83811015611a5f578181015183820152602001611a47565b50506000910152565b60008151808452611a80816020860160208601611a44565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061050f6020830184611a68565b604080825283519082018190526000906020906060840190828701845b82811015611b1457815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101611ae2565b50505083810382850152610dd68186611a68565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff831680611bf757611bf7611b86565b8060ff84160491505092915050565b808202811582820484141761051257610512611bb5565b8082018082111561051257610512611bb5565b600060ff831680611c4357611c43611b86565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c8357611c83611bb5565b5060010190565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611cc4816004850160208701611a44565b919091016004019392505050565b60008251611ce4818460208701611a44565b9190910192915050565b600060208284031215611d0057600080fd5b81518015158114611a3d57600080fd5b604081526000611d236040830185611a68565b8281036020840152611d358185611a68565b95945050505050565b805173ffffffffffffffffffffffffffffffffffffffff8116811461044657600080fd5b600060208284031215611d7457600080fd5b61050f82611d3e565b60ff818116838216019081111561051257610512611bb5565b60ff828116828216039081111561051257610512611bb5565b7f2e00000000000000000000000000000000000000000000000000000000000000815260008251611de7816001850160208701611a44565b9190910160010192915050565b600181811c90821680611e0857607f821691505b602082108103611e41577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201855480825260808401915060808160051b8501018760005260208060002060005b84811015612268578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110611f2d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b80600784011015612081578454611f8b838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b8116606085015261200260808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b61203560a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190611f50565b935493808310156120c3576120ba828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156120fd5760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156121375760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561217157608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156121ab57606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156121e557604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561221d5784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561224f577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b5098860198965050506002929092019150600101611ea1565b505073ffffffffffffffffffffffffffffffffffffffff88169086015284810360408601526122978187611a68565b98975050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122ea576122ea611b28565b604052919050565b600067ffffffffffffffff82111561230c5761230c611b28565b5060051b60200190565b6000602080838503121561232957600080fd5b825167ffffffffffffffff81111561234057600080fd5b8301601f8101851361235157600080fd5b805161236461235f826122f2565b6122a3565b81815260059190911b8201830190838101908783111561238357600080fd5b928401925b828410156123a85761239984611d3e565b82529284019290840190612388565b979650505050505050565b600081546123c081611df4565b600182811680156123d8576001811461240b5761243a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008416875282151583028701945061243a565b8560005260208060002060005b858110156124315781548a820152908401908201612418565b50505082870194505b5050505092915050565b600061245082846123b3565b7f2f636f6e6669672f6e6f6e73746473656c6563746f72732e6a736f6e000000008152601c019392505050565b601f8211156124c757600081815260208120601f850160051c810160208610156124a45750805b601f850160051c820191505b818110156124c3578281556001016124b0565b5050505b505050565b815167ffffffffffffffff8111156124e6576124e6611b28565b6124fa816124f48454611df4565b8461247d565b602080601f83116001811461254d57600084156125175750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556124c3565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561259a5788860151825594840194600190910190840161257b565b50858210156125d657878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352600084546125fa81611df4565b8084870152604060018084166000811461261b576001811461265357612681565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838a01528284151560051b8a01019550612681565b896000528660002060005b858110156126795781548b820186015290830190880161265e565b8a0184019650505b509398975050505050505050565b600067ffffffffffffffff8311156126a9576126a9611b28565b6126da60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116016122a3565b90508281528383830111156126ee57600080fd5b611a3d836020830184611a44565b60006020828403121561270e57600080fd5b815167ffffffffffffffff81111561272557600080fd5b8201601f8101841361273657600080fd5b6127458482516020840161268f565b949350505050565b7f2e000000000000000000000000000000000000000000000000000000000000008152600061277f60018301846123b3565b7f2e73656c6563746f7273000000000000000000000000000000000000000000008152600a019392505050565b600082601f8301126127bd57600080fd5b815160206127cd61235f836122f2565b82815260059290921b840181019181810190868411156127ec57600080fd5b8286015b84811015612810578051612803816119ef565b83529183019183016127f0565b509695505050505050565b60006020828403121561282d57600080fd5b815167ffffffffffffffff8082111561284557600080fd5b908301906020828603121561285957600080fd5b60405160208101818110838211171561287457612874611b28565b60405282518281111561288657600080fd5b612892878286016127ac565b82525095945050505050565b604080825283519082018190526000906020906060840190828701845b828110156128f95781517fffffffff0000000000000000000000000000000000000000000000000000000016845292840192908401906001016128bb565b50505093151592019190915250919050565b6000835161291d818460208801611a44565b835190830190612931818360208801611a44565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156129d5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526129c3858351611a68565b94509285019290850190600101612989565b5092979650505050505050565b6000602082840312156129f457600080fd5b815167ffffffffffffffff811115612a0b57600080fd5b612745848285016127ac56fe7363726970742f6465706c6f792f6661636574732f7574696c732f636f6e74726163742d73656c6563746f72732e73684e6f6e5374616e6461726453656c6563746f727352656769737472794661636574a2646970667358221220a7cd2e9de2077cb441b12ba9015872aed4933a7fa551b1951ac12a8ef850882964736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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