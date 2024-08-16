/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CalldataVerificationFacet,
  CalldataVerificationFacetInterface,
} from "../CalldataVerificationFacet";

const _abi = [
  {
    type: "function",
    name: "extractBridgeData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridgeData",
        type: "tuple",
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridgeData",
        type: "tuple",
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractGenericSwapParameters",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "receivingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receivingAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractMainParameters",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridge",
        type: "string",
        internalType: "string",
      },
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "hasSourceSwaps",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "hasDestinationCall",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractNonEVMAddress",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "nonEVMAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractSwapData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "validateCalldata",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "bridge",
        type: "string",
        internalType: "string",
      },
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "hasSourceSwaps",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "hasDestinationCall",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "isValid",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "validateDestinationCalldata",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "callTo",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "dstCalldata",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "isValid",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "error",
    name: "InvalidCallData",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOverflow",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506127b4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b366004611347565b6101cf565b6040516100ad91906114e4565b60405180910390f35b6100c96100c4366004611347565b6101e2565b6040516100ad9291906115ec565b6100ea6100e5366004611347565b61025d565b6040516100ad919061161a565b61010a610105366004611347565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b61016561016036600461167b565b6105cf565b60405190151581526020016100ad565b610188610183366004611347565b610860565b6040519081526020016100ad565b6101a96101a4366004611347565b610959565b6040516100ad979695949392919061174a565b6101656101ca3660046117a8565b610a14565b60606101db8383610f1f565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610ff1565b915081610100015115610256576102538484610f1f565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610ff1565b6000808080806060816102cf6004828a8c611842565b6102d89161186c565b9050600089898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050825192935050506101e41115610352576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f295b43b0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016103f9576103a9604860448b8d611842565b6103b29161186c565b91506103c1896044818d611842565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b61040282611107565b1561051b5760408051600180825281830190925290816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161041c579050506040805160e08101825260008082526020820181905291810182905260608082018390526080820183905260a082015260c08101919091529093506104d760048084516104cf9190611910565b8491906111eb565b8060200190518101906104ea9190611b5b565b8951929c5090995094508493508792506000915061050a5761050a611c09565b602002602001018190525050610553565b610535600480835161052d9190611910565b8391906111eb565b8060200190518101906105489190611ce7565b919a50975095505050505b8260008151811061056657610566611c09565b60200260200101516040015197508260008151811061058757610587611c09565b602002602001015160800151965082600184516105a49190611910565b815181106105b4576105b4611c09565b60200260200101516060015194505050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261062a8c8c610959565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a085015216608083015260208083019190915260408051600081529182018082528251902091610691918d918d9101611d88565b604051602081830303815290604052805190602001201480610704575089896040516020016106c1929190611d88565b6040516020818303038152906040528051906020012081602001516040516020016106ec9190611d98565b60405160208183030381529060405280519060200120145b801561075e575073ffffffffffffffffffffffffffffffffffffffff808916148061075e57508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b80156107b8575073ffffffffffffffffffffffffffffffffffffffff80881614806107b857508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156107f057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107f05750858160c00151145b801561082857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8514806108285750848160e00151145b801561083c57508315158161010001511515145b801561085057508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394506108a89250879150869050610ff1565b90507fd6a4bc50000000000000000000000000000000000000000000000000000000006108d9600460008789611842565b6108e29161186c565b7fffffffff000000000000000000000000000000000000000000000000000000001603610926576109168460048188611842565b8101906109239190611e05565b91505b806101000151156109435760648201518201602401519250610951565b604482015182016024015192505b505092915050565b606060008060008060008060006109708a8a610ff1565b9050806101000151156109d35760006109898b8b610f1f565b90508060008151811061099e5761099e611c09565b6020026020010151604001519750806000815181106109bf576109bf611c09565b6020026020010151608001519550506109e2565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc500000000000000000000000000000000000000000000000000000000093610a8093506004925090508a8c611842565b610a899161186c565b7fffffffff000000000000000000000000000000000000000000000000000000001603610acd57610abd876004818b611842565b810190610aca9190611e05565b90505b600081806020019051810190610ae39190611e3a565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bd5576000610b4a6004808551610b429190611910565b8591906111eb565b806020019051810190610b5d919061200a565b9150508060000151805190602001208686604051610b7c929190611d88565b6040518091039020148015610bcb5750602081015173ffffffffffffffffffffffffffffffffffffffff16610bb3888a018a61206e565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610f15565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c65576000610c326004808551610b429190611910565b806020019051810190610c45919061208b565b925050508060000151805190602001208686604051610b7c929190611d88565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d33576000610cc26004808551610b429190611910565b806020019051810190610cd591906121c6565b9150508060e00151805190602001208686604051610cf4929190611d88565b6040518091039020148015610bcb57508060c00151805190602001208888604051610d20929190611d88565b6040518091039020149350505050610f15565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610dc3576000610d906004808551610b429190611910565b806020019051810190610da39190612220565b925050508060e00151805190602001208686604051610cf4929190611d88565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610e7e576000610e206004808551610b429190611910565b806020019051810190610e339190612371565b9150508060600151805190602001208686604051610e52929190611d88565b6040518091039020148015610bcb57508060400151805190602001208888604051610d20929190611d88565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610f0e576000610edb6004808551610b429190611910565b806020019051810190610eee91906123cb565b925050508060600151805190602001208686604051610e52929190611d88565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610f50600460008587611842565b610f599161186c565b7fffffffff000000000000000000000000000000000000000000000000000000001603610fcd576000610f8f8360048187611842565b810190610f9c9190611e05565b9050610fb0600480835161052d9190611910565b806020019051810190610fc39190612449565b9250610feb915050565b610fda8260048186611842565b810190610fe7919061257e565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc5000000000000000000000000000000000000000000000000000000000611072600460008587611842565b61107b9161186c565b7fffffffff0000000000000000000000000000000000000000000000000000000016036110ed5760006110b18360048187611842565b8101906110be9190611e05565b90506110d2600480835161052d9190611910565b8060200190518101906110e59190612701565b915050610feb565b6110fa8260048186611842565b8101906101db9190612736565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4666fc8000000000000000000000000000000000000000000000000000000000148061119a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f733214a300000000000000000000000000000000000000000000000000000000145b80610feb57507fffffffff0000000000000000000000000000000000000000000000000000000082167faf7060fd000000000000000000000000000000000000000000000000000000001492915050565b6060816111f981601f61276b565b1015611231576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61123b828461276b565b84511015611275576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561129457604051915060008252602082016040526112fc565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156112cd5780518352602092830192016112b5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261131757600080fd5b50813567ffffffffffffffff81111561132f57600080fd5b60208301915083602082850101111561025657600080fd5b6000806020838503121561135a57600080fd5b823567ffffffffffffffff81111561137157600080fd5b61137d85828601611305565b90969095509350505050565b60005b838110156113a457818101518382015260200161138c565b50506000910152565b600081518084526113c5816020860160208601611389565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b848110156114d7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e082870181905291906114aa838801826113ad565b9250505060c08083015192506114c38187018415159052565b509985019993505090830190600101611414565b5090979650505050505050565b6020815260006101db60208301846113f7565b6000610140825184526020830151816020860152611517828601826113ad565b9150506040830151848203604086015261153182826113ad565b915050606083015161155b606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611583608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a08301516115ab60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516115d48287018215159052565b50506101209283015115159390920192909252919050565b6040815260006115ff60408301856114f7565b828103602084015261161181856113f7565b95945050505050565b6020815260006101db60208301846114f7565b73ffffffffffffffffffffffffffffffffffffffff8116811461164f57600080fd5b50565b803561165d8161162d565b919050565b801515811461164f57600080fd5b803561165d81611662565b6000806000806000806000806000806101008b8d03121561169b57600080fd5b8a3567ffffffffffffffff808211156116b357600080fd5b6116bf8e838f01611305565b909c509a5060208d01359150808211156116d857600080fd5b506116e58d828e01611305565b90995097505060408b01356116f98161162d565b955060608b01356117098161162d565b945060808b0135935060a08b0135925060c08b013561172781611662565b915060e08b013561173781611662565b809150509295989b9194979a5092959850565b60e08152600061175d60e083018a6113ad565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b600080600080600080606087890312156117c157600080fd5b863567ffffffffffffffff808211156117d957600080fd5b6117e58a838b01611305565b909850965060208901359150808211156117fe57600080fd5b61180a8a838b01611305565b9096509450604089013591508082111561182357600080fd5b5061183089828a01611305565b979a9699509497509295939492505050565b6000808585111561185257600080fd5b8386111561185f57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156109515760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610feb57610feb6118e1565b60405160e0810167ffffffffffffffff81118282101715611946576119466118b2565b60405290565b604051610140810167ffffffffffffffff81118282101715611946576119466118b2565b604051610100810167ffffffffffffffff81118282101715611946576119466118b2565b60405160c0810167ffffffffffffffff81118282101715611946576119466118b2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119fe576119fe6118b2565b604052919050565b600067ffffffffffffffff821115611a2057611a206118b2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611a5d57600080fd5b8151611a70611a6b82611a06565b6119b7565b818152846020838601011115611a8557600080fd5b611a96826020830160208701611389565b949350505050565b805161165d8161162d565b805161165d81611662565b600060e08284031215611ac657600080fd5b611ace611923565b9050611ad982611a9e565b8152611ae760208301611a9e565b6020820152611af860408301611a9e565b6040820152611b0960608301611a9e565b60608201526080820151608082015260a082015167ffffffffffffffff811115611b3257600080fd5b611b3e84828501611a4c565b60a083015250611b5060c08301611aa9565b60c082015292915050565b60008060008060008060c08789031215611b7457600080fd5b86519550602087015167ffffffffffffffff80821115611b9357600080fd5b611b9f8a838b01611a4c565b96506040890151915080821115611bb557600080fd5b611bc18a838b01611a4c565b955060608901519150611bd38261162d565b608089015160a08a0151929550935080821115611bef57600080fd5b50611bfc89828a01611ab4565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600067ffffffffffffffff821115611c5257611c526118b2565b5060051b60200190565b600082601f830112611c6d57600080fd5b81516020611c7d611a6b83611c38565b82815260059290921b84018101918181019086841115611c9c57600080fd5b8286015b84811015611cdc57805167ffffffffffffffff811115611cc05760008081fd5b611cce8986838b0101611ab4565b845250918301918301611ca0565b509695505050505050565b60008060008060008060c08789031215611d0057600080fd5b86519550602087015167ffffffffffffffff80821115611d1f57600080fd5b611d2b8a838b01611a4c565b96506040890151915080821115611d4157600080fd5b611d4d8a838b01611a4c565b955060608901519150611d5f8261162d565b608089015160a08a0151929550935080821115611d7b57600080fd5b50611bfc89828a01611c5c565b8183823760009101908152919050565b60008251611daa818460208701611389565b9190910192915050565b600082601f830112611dc557600080fd5b8135611dd3611a6b82611a06565b818152846020838601011115611de857600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611e1757600080fd5b813567ffffffffffffffff811115611e2e57600080fd5b611a9684828501611db4565b600060208284031215611e4c57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611e8f57600080fd5b611e9761194c565b905081518152602082015167ffffffffffffffff80821115611eb857600080fd5b611ec485838601611a4c565b60208401526040840151915080821115611edd57600080fd5b50611eea84828501611a4c565b604083015250611efc60608301611a9e565b6060820152611f0d60808301611a9e565b6080820152611f1e60a08301611a9e565b60a082015260c082015160c082015260e082015160e0820152610100611f45818401611aa9565b90820152610120611f57838201611aa9565b9082015292915050565b805163ffffffff8116811461165d57600080fd5b600060e08284031215611f8757600080fd5b611f8f611923565b9050815167ffffffffffffffff811115611fa857600080fd5b611fb484828501611a4c565b825250611fc360208301611a9e565b60208201526040820151604082015260608201516060820152611fe860808301611a9e565b6080820152611ff960a08301611f61565b60a0820152611b5060c08301611aa9565b6000806040838503121561201d57600080fd5b825167ffffffffffffffff8082111561203557600080fd5b61204186838701611e7c565b9350602085015191508082111561205757600080fd5b5061206485828601611f75565b9150509250929050565b60006020828403121561208057600080fd5b81356101db8161162d565b6000806000606084860312156120a057600080fd5b835167ffffffffffffffff808211156120b857600080fd5b6120c487838801611e7c565b945060208601519150808211156120da57600080fd5b6120e687838801611c5c565b935060408601519150808211156120fc57600080fd5b5061210986828701611f75565b9150509250925092565b6000610100828403121561212657600080fd5b61212e611970565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015261216860a08301611a9e565b60a082015260c082015167ffffffffffffffff8082111561218857600080fd5b61219485838601611a4c565b60c084015260e08401519150808211156121ad57600080fd5b506121ba84828501611a4c565b60e08301525092915050565b600080604083850312156121d957600080fd5b825167ffffffffffffffff808211156121f157600080fd5b6121fd86838701611e7c565b9350602085015191508082111561221357600080fd5b5061206485828601612113565b60008060006060848603121561223557600080fd5b835167ffffffffffffffff8082111561224d57600080fd5b61225987838801611e7c565b9450602086015191508082111561226f57600080fd5b61227b87838801611c5c565b9350604086015191508082111561229157600080fd5b5061210986828701612113565b805167ffffffffffffffff8116811461165d57600080fd5b80516007811061165d57600080fd5b600060c082840312156122d757600080fd5b6122df611994565b90506122ea82611f61565b81526122f86020830161229e565b6020820152604082015167ffffffffffffffff8082111561231857600080fd5b61232485838601611a4c565b6040840152606084015191508082111561233d57600080fd5b5061234a84828501611a4c565b6060830152506080820151608082015261236660a083016122b6565b60a082015292915050565b6000806040838503121561238457600080fd5b825167ffffffffffffffff8082111561239c57600080fd5b6123a886838701611e7c565b935060208501519150808211156123be57600080fd5b50612064858286016122c5565b6000806000606084860312156123e057600080fd5b835167ffffffffffffffff808211156123f857600080fd5b61240487838801611e7c565b9450602086015191508082111561241a57600080fd5b61242687838801611c5c565b9350604086015191508082111561243c57600080fd5b50612109868287016122c5565b6000806040838503121561245c57600080fd5b825167ffffffffffffffff8082111561247457600080fd5b61248086838701611e7c565b9350602085015191508082111561249657600080fd5b5061206485828601611c5c565b600061014082840312156124b657600080fd5b6124be61194c565b905081358152602082013567ffffffffffffffff808211156124df57600080fd5b6124eb85838601611db4565b6020840152604084013591508082111561250457600080fd5b5061251184828501611db4565b60408301525061252360608301611652565b606082015261253460808301611652565b608082015261254560a08301611652565b60a082015260c082013560c082015260e082013560e082015261010061256c818401611670565b90820152610120611f57838201611670565b6000806040838503121561259157600080fd5b823567ffffffffffffffff808211156125a957600080fd5b6125b5868387016124a3565b93506020915081850135818111156125cc57600080fd5b8501601f810187136125dd57600080fd5b80356125eb611a6b82611c38565b81815260059190911b8201840190848101908983111561260a57600080fd5b8584015b838110156126f05780358681111561262557600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561265957600080fd5b612661611923565b61266c898301611652565b815261267a60408301611652565b8982015261268a60608301611652565b604082015261269b60808301611652565b606082015260a0820135608082015260c080830135898111156126be5760008081fd5b6126cc8f8c83870101611db4565b60a0840152506126de60e08401611670565b9082015284525091860191860161260e565b508096505050505050509250929050565b60006020828403121561271357600080fd5b815167ffffffffffffffff81111561272a57600080fd5b611a9684828501611e7c565b60006020828403121561274857600080fd5b813567ffffffffffffffff81111561275f57600080fd5b611a96848285016124a3565b80820180821115610feb57610feb6118e156fea264697066735822122088593e2900d7913e15ea816ef2b136c24f39f6e35d7e559000e8a67505e0a8d864736f6c63430008110033";

type CalldataVerificationFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CalldataVerificationFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CalldataVerificationFacet__factory extends ContractFactory {
  constructor(...args: CalldataVerificationFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CalldataVerificationFacet> {
    return super.deploy(overrides || {}) as Promise<CalldataVerificationFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CalldataVerificationFacet {
    return super.attach(address) as CalldataVerificationFacet;
  }
  override connect(signer: Signer): CalldataVerificationFacet__factory {
    return super.connect(signer) as CalldataVerificationFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalldataVerificationFacetInterface {
    return new utils.Interface(_abi) as CalldataVerificationFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CalldataVerificationFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CalldataVerificationFacet;
  }
}
