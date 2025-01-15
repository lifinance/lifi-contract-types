/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CalldataVerificationFacet,
  CalldataVerificationFacetInterface,
} from "../CalldataVerificationFacet.js";

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
  "0x608060405234801561001057600080fd5b50612f7a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b3660046116de565b6101cf565b6040516100ad919061187b565b60405180910390f35b6100c96100c43660046116de565b6101e2565b6040516100ad929190611983565b6100ea6100e53660046116de565b61025d565b6040516100ad91906119b1565b61010a6101053660046116de565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611a12565b610665565b60405190151581526020016100ad565b6101886101833660046116de565b610864565b6040519081526020016100ad565b6101a96101a43660046116de565b61095c565b6040516100ad9796959493929190611ae1565b6101656101ca366004611b3f565b610a17565b60606101db83836112d4565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c84846113ae565b9150816101000151156102565761025384846112d4565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db83836113ae565b6000808080806101e486116102fa576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606080600061030c6004828b8d611bd9565b61031591611c03565b90507f295b43b0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016103c35761036e604860448b8d611bd9565b61037791611c03565b9050610386896044818d611bd9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294506103fd92505050565b89898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b7fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc8000000000000000000000000000000000000000000000000000000000148061048e57507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b806104da57507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b156105b95760408051600180825281830190925290816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816104f4579050509250610576600480845161056e9190611ca9565b8491906114c4565b8060200190518101906105899190611f17565b8851929550909350915086906000906105a4576105a4611fc5565b602090810291909101015290965093506105e9565b6105cb600480845161056e9190611ca9565b8060200190518101906105de91906120a3565b919a50975095505050505b826000815181106105fc576105fc611fc5565b60200260200101516040015197508260008151811061061d5761061d611fc5565b6020026020010151608001519650826001845161063a9190611ca9565b8151811061064a5761064a611fc5565b60200260200101516060015194505050509295509295909350565b6000806106728c8c6113ae565b905060008a8a604051602001610689929190612144565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008452908301918290529151902090915081148061070757508082602001516040516020016106ef9190612154565b60405160208183030381529060405280519060200120145b8015610761575073ffffffffffffffffffffffffffffffffffffffff808a16148061076157508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b80156107bb575073ffffffffffffffffffffffffffffffffffffffff80891614806107bb57508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156107f357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806107f35750868260c00151145b801561082b57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86148061082b5750858260e00151145b801561083f57508415158261010001511515145b801561085357508315158261012001511515145b9d9c50505050505050505050505050565b600060607fd6a4bc50000000000000000000000000000000000000000000000000000000006108966004848688611bd9565b61089f91611c03565b7fffffffff0000000000000000000000000000000000000000000000000000000016036108e7576108d38360048187611bd9565b8101906108e091906121c1565b9050610921565b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b61092b84846113ae565b6101000151156109475760648101518101602401519150610955565b604481015181016024015191505b5092915050565b606060008060008060008060006109738a8a6113ae565b9050806101000151156109d657600061098c8b8b6112d4565b9050806000815181106109a1576109a1611fc5565b6020026020010151604001519750806000815181106109c2576109c2611fc5565b6020026020010151608001519550506109e5565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc500000000000000000000000000000000000000000000000000000000093610a8393506004925090508a8c611bd9565b610a8c91611c03565b7fffffffff000000000000000000000000000000000000000000000000000000001603610ad057610ac0876004818b611bd9565b810190610acd91906121c1565b90505b600081806020019051810190610ae691906121f6565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bd8576000610b4d6004808551610b459190611ca9565b8591906114c4565b806020019051810190610b6091906123c6565b9150508060000151805190602001208686604051610b7f929190612144565b6040518091039020148015610bce5750602081015173ffffffffffffffffffffffffffffffffffffffff16610bb6888a018a61242a565b73ffffffffffffffffffffffffffffffffffffffff16145b93505050506112ca565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c68576000610c356004808551610b459190611ca9565b806020019051810190610c489190612447565b925050508060000151805190602001208686604051610b7f929190612144565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d36576000610cc56004808551610b459190611ca9565b806020019051810190610cd89190612582565b9150508060e00151805190602001208686604051610cf7929190612144565b6040518091039020148015610bce57508060c00151805190602001208888604051610d23929190612144565b60405180910390201493505050506112ca565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610dc6576000610d936004808551610b459190611ca9565b806020019051810190610da691906125dc565b925050508060e00151805190602001208686604051610cf7929190612144565b7feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610eaf576000610e236004808551610b459190611ca9565b806020019051810190610e3691906127d6565b915050806020015160a00151805190602001208686604051610e59929190612144565b6040518091039020148015610bce5750610bce88888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060208381015101516115de565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610f43576000610f0c6004808551610b459190611ca9565b806020019051810190610f1f9190612830565b92505050806020015160a00151805190602001208686604051610e59929190612144565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ffe576000610fa06004808551610b459190611ca9565b806020019051810190610fb39190612981565b9150508060600151805190602001208686604051610fd2929190612144565b6040518091039020148015610bce57508060400151805190602001208888604051610d23929190612144565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082160161108e57600061105b6004808551610b459190611ca9565b80602001905181019061106e91906129db565b925050508060600151805190602001208686604051610fd2929190612144565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016111785760006110eb6004808551610b459190611ca9565b8060200190518101906110fe9190612b37565b91505080610120015180519060200120868660405161111e929190612144565b6040518091039020148015610bce575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208888604051610d23929190612144565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016112095760006111d56004808551610b459190611ca9565b8060200190518101906111e89190612b91565b9250505080610120015180519060200120868660405161111e929190612144565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016112665760006110eb6004808551610b459190611ca9565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016112c35760006111d56004808551610b459190611ca9565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000611305600460008587611bd9565b61130e91611c03565b7fffffffff00000000000000000000000000000000000000000000000000000000160361138a5760006113448360048187611bd9565b81019061135191906121c1565b905061136d60048083516113659190611ca9565b8391906114c4565b8060200190518101906113809190612c0f565b92506113a8915050565b6113978260048186611bd9565b8101906113a49190612d44565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc500000000000000000000000000000000000000000000000000000000061142f600460008587611bd9565b61143891611c03565b7fffffffff0000000000000000000000000000000000000000000000000000000016036114aa57600061146e8360048187611bd9565b81019061147b91906121c1565b905061148f60048083516113659190611ca9565b8060200190518101906114a29190612ec7565b9150506113a8565b6114b78260048186611bd9565b8101906101db9190612efc565b6060816114d281601f612f31565b101561150a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115148284612f31565b8451101561154e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561156d57604051915060008252602082016040526115d5565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156115a657805183526020928301920161158e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6000601483511015611676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b506020919091015173ffffffffffffffffffffffffffffffffffffffff91821691161490565b60008083601f8401126116ae57600080fd5b50813567ffffffffffffffff8111156116c657600080fd5b60208301915083602082850101111561025657600080fd5b600080602083850312156116f157600080fd5b823567ffffffffffffffff81111561170857600080fd5b6117148582860161169c565b90969095509350505050565b60005b8381101561173b578181015183820152602001611723565b50506000910152565b6000815180845261175c816020860160208601611720565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b8481101561186e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e0828701819052919061184183880182611744565b9250505060c080830151925061185a8187018415159052565b5099850199935050908301906001016117ab565b5090979650505050505050565b6020815260006101db602083018461178e565b60006101408251845260208301518160208601526118ae82860182611744565b915050604083015184820360408601526118c88282611744565b91505060608301516118f2606086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608083015161191a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161194260a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e08501526101008084015161196b8287018215159052565b50506101209283015115159390920192909252919050565b604081526000611996604083018561188e565b82810360208401526119a8818561178e565b95945050505050565b6020815260006101db602083018461188e565b73ffffffffffffffffffffffffffffffffffffffff811681146119e657600080fd5b50565b80356119f4816119c4565b919050565b80151581146119e657600080fd5b80356119f4816119f9565b6000806000806000806000806000806101008b8d031215611a3257600080fd5b8a3567ffffffffffffffff80821115611a4a57600080fd5b611a568e838f0161169c565b909c509a5060208d0135915080821115611a6f57600080fd5b50611a7c8d828e0161169c565b90995097505060408b0135611a90816119c4565b955060608b0135611aa0816119c4565b945060808b0135935060a08b0135925060c08b0135611abe816119f9565b915060e08b0135611ace816119f9565b809150509295989b9194979a5092959850565b60e081526000611af460e083018a611744565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b60008060008060008060608789031215611b5857600080fd5b863567ffffffffffffffff80821115611b7057600080fd5b611b7c8a838b0161169c565b90985096506020890135915080821115611b9557600080fd5b611ba18a838b0161169c565b90965094506040890135915080821115611bba57600080fd5b50611bc789828a0161169c565b979a9699509497509295939492505050565b60008085851115611be957600080fd5b83861115611bf657600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611c435780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156113a8576113a8611c7a565b60405160e0810167ffffffffffffffff81118282101715611cdf57611cdf611c4b565b60405290565b604051610140810167ffffffffffffffff81118282101715611cdf57611cdf611c4b565b604051610100810167ffffffffffffffff81118282101715611cdf57611cdf611c4b565b6040516080810167ffffffffffffffff81118282101715611cdf57611cdf611c4b565b60405160c0810167ffffffffffffffff81118282101715611cdf57611cdf611c4b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611dba57611dba611c4b565b604052919050565b600067ffffffffffffffff821115611ddc57611ddc611c4b565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611e1957600080fd5b8151611e2c611e2782611dc2565b611d73565b818152846020838601011115611e4157600080fd5b611e52826020830160208701611720565b949350505050565b80516119f4816119c4565b80516119f4816119f9565b600060e08284031215611e8257600080fd5b611e8a611cbc565b9050611e9582611e5a565b8152611ea360208301611e5a565b6020820152611eb460408301611e5a565b6040820152611ec560608301611e5a565b60608201526080820151608082015260a082015167ffffffffffffffff811115611eee57600080fd5b611efa84828501611e08565b60a083015250611f0c60c08301611e65565b60c082015292915050565b60008060008060008060c08789031215611f3057600080fd5b86519550602087015167ffffffffffffffff80821115611f4f57600080fd5b611f5b8a838b01611e08565b96506040890151915080821115611f7157600080fd5b611f7d8a838b01611e08565b955060608901519150611f8f826119c4565b608089015160a08a0151929550935080821115611fab57600080fd5b50611fb889828a01611e70565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600067ffffffffffffffff82111561200e5761200e611c4b565b5060051b60200190565b600082601f83011261202957600080fd5b81516020612039611e2783611ff4565b82815260059290921b8401810191818101908684111561205857600080fd5b8286015b8481101561209857805167ffffffffffffffff81111561207c5760008081fd5b61208a8986838b0101611e70565b84525091830191830161205c565b509695505050505050565b60008060008060008060c087890312156120bc57600080fd5b86519550602087015167ffffffffffffffff808211156120db57600080fd5b6120e78a838b01611e08565b965060408901519150808211156120fd57600080fd5b6121098a838b01611e08565b95506060890151915061211b826119c4565b608089015160a08a015192955093508082111561213757600080fd5b50611fb889828a01612018565b8183823760009101908152919050565b60008251612166818460208701611720565b9190910192915050565b600082601f83011261218157600080fd5b813561218f611e2782611dc2565b8181528460208386010111156121a457600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156121d357600080fd5b813567ffffffffffffffff8111156121ea57600080fd5b611e5284828501612170565b60006020828403121561220857600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b6000610140828403121561224b57600080fd5b612253611ce5565b905081518152602082015167ffffffffffffffff8082111561227457600080fd5b61228085838601611e08565b6020840152604084015191508082111561229957600080fd5b506122a684828501611e08565b6040830152506122b860608301611e5a565b60608201526122c960808301611e5a565b60808201526122da60a08301611e5a565b60a082015260c082015160c082015260e082015160e0820152610100612301818401611e65565b90820152610120612313838201611e65565b9082015292915050565b805163ffffffff811681146119f457600080fd5b600060e0828403121561234357600080fd5b61234b611cbc565b9050815167ffffffffffffffff81111561236457600080fd5b61237084828501611e08565b82525061237f60208301611e5a565b602082015260408201516040820152606082015160608201526123a460808301611e5a565b60808201526123b560a0830161231d565b60a0820152611f0c60c08301611e65565b600080604083850312156123d957600080fd5b825167ffffffffffffffff808211156123f157600080fd5b6123fd86838701612238565b9350602085015191508082111561241357600080fd5b5061242085828601612331565b9150509250929050565b60006020828403121561243c57600080fd5b81356101db816119c4565b60008060006060848603121561245c57600080fd5b835167ffffffffffffffff8082111561247457600080fd5b61248087838801612238565b9450602086015191508082111561249657600080fd5b6124a287838801612018565b935060408601519150808211156124b857600080fd5b506124c586828701612331565b9150509250925092565b600061010082840312156124e257600080fd5b6124ea611d09565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015261252460a08301611e5a565b60a082015260c082015167ffffffffffffffff8082111561254457600080fd5b61255085838601611e08565b60c084015260e084015191508082111561256957600080fd5b5061257684828501611e08565b60e08301525092915050565b6000806040838503121561259557600080fd5b825167ffffffffffffffff808211156125ad57600080fd5b6125b986838701612238565b935060208501519150808211156125cf57600080fd5b50612420858286016124cf565b6000806000606084860312156125f157600080fd5b835167ffffffffffffffff8082111561260957600080fd5b61261587838801612238565b9450602086015191508082111561262b57600080fd5b61263787838801612018565b9350604086015191508082111561264d57600080fd5b506124c5868287016124cf565b60006040828403121561266c57600080fd5b6040516040810181811067ffffffffffffffff8211171561268f5761268f611c4b565b604052825181526020928301519281019290925250919050565b600060a082840312156126bb57600080fd5b6126c3611d2d565b9050815161ffff811681146126d757600080fd5b8152602082015167ffffffffffffffff808211156126f457600080fd5b9083019060e0828603121561270857600080fd5b612710611cbc565b6127198361231d565b815260208301516020820152604083015160408201526060830151606082015260808301518281111561274b57600080fd5b61275787828601611e08565b60808301525060a08301518281111561276f57600080fd5b61277b87828601611e08565b60a08301525060c08301518281111561279357600080fd5b61279f87828601611e08565b60c0830152506020840152506127ba9050836040840161265a565b60408201526127cb60808301611e5a565b606082015292915050565b600080604083850312156127e957600080fd5b825167ffffffffffffffff8082111561280157600080fd5b61280d86838701612238565b9350602085015191508082111561282357600080fd5b50612420858286016126a9565b60008060006060848603121561284557600080fd5b835167ffffffffffffffff8082111561285d57600080fd5b61286987838801612238565b9450602086015191508082111561287f57600080fd5b61288b87838801612018565b935060408601519150808211156128a157600080fd5b506124c5868287016126a9565b805167ffffffffffffffff811681146119f457600080fd5b8051600781106119f457600080fd5b600060c082840312156128e757600080fd5b6128ef611d50565b90506128fa8261231d565b8152612908602083016128ae565b6020820152604082015167ffffffffffffffff8082111561292857600080fd5b61293485838601611e08565b6040840152606084015191508082111561294d57600080fd5b5061295a84828501611e08565b6060830152506080820151608082015261297660a083016128c6565b60a082015292915050565b6000806040838503121561299457600080fd5b825167ffffffffffffffff808211156129ac57600080fd5b6129b886838701612238565b935060208501519150808211156129ce57600080fd5b50612420858286016128d5565b6000806000606084860312156129f057600080fd5b835167ffffffffffffffff80821115612a0857600080fd5b612a1487838801612238565b94506020860151915080821115612a2a57600080fd5b612a3687838801612018565b93506040860151915080821115612a4c57600080fd5b506124c5868287016128d5565b60006101408284031215612a6c57600080fd5b612a74611ce5565b9050612a7f82611e5a565b8152612a8d60208301611e5a565b6020820152612a9e60408301611e5a565b604082015260608201516060820152612ab9608083016128ae565b6080820152612aca60a08301611e5a565b60a0820152612adb60c0830161231d565b60c0820152612aec60e0830161231d565b60e0820152610100612aff81840161231d565b908201526101208281015167ffffffffffffffff811115612b1f57600080fd5b612b2b85828601611e08565b82840152505092915050565b60008060408385031215612b4a57600080fd5b825167ffffffffffffffff80821115612b6257600080fd5b612b6e86838701612238565b93506020850151915080821115612b8457600080fd5b5061242085828601612a59565b600080600060608486031215612ba657600080fd5b835167ffffffffffffffff80821115612bbe57600080fd5b612bca87838801612238565b94506020860151915080821115612be057600080fd5b612bec87838801612018565b93506040860151915080821115612c0257600080fd5b506124c586828701612a59565b60008060408385031215612c2257600080fd5b825167ffffffffffffffff80821115612c3a57600080fd5b612c4686838701612238565b93506020850151915080821115612c5c57600080fd5b5061242085828601612018565b60006101408284031215612c7c57600080fd5b612c84611ce5565b905081358152602082013567ffffffffffffffff80821115612ca557600080fd5b612cb185838601612170565b60208401526040840135915080821115612cca57600080fd5b50612cd784828501612170565b604083015250612ce9606083016119e9565b6060820152612cfa608083016119e9565b6080820152612d0b60a083016119e9565b60a082015260c082013560c082015260e082013560e0820152610100612d32818401611a07565b90820152610120612313838201611a07565b60008060408385031215612d5757600080fd5b823567ffffffffffffffff80821115612d6f57600080fd5b612d7b86838701612c69565b9350602091508185013581811115612d9257600080fd5b8501601f81018713612da357600080fd5b8035612db1611e2782611ff4565b81815260059190911b82018401908481019089831115612dd057600080fd5b8584015b83811015612eb657803586811115612deb57600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215612e1f57600080fd5b612e27611cbc565b612e328983016119e9565b8152612e40604083016119e9565b89820152612e50606083016119e9565b6040820152612e61608083016119e9565b606082015260a0820135608082015260c08083013589811115612e845760008081fd5b612e928f8c83870101612170565b60a084015250612ea460e08401611a07565b90820152845250918601918601612dd4565b508096505050505050509250929050565b600060208284031215612ed957600080fd5b815167ffffffffffffffff811115612ef057600080fd5b611e5284828501612238565b600060208284031215612f0e57600080fd5b813567ffffffffffffffff811115612f2557600080fd5b611e5284828501612c69565b808201808211156113a8576113a8611c7a56fea2646970667358221220c07238ca18720e30f7c1ca97aa47f10d1661e4abf7ed2d4fc35190c02bacf08f64736f6c63430008110033";

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
    overrides?: Overrides & { from?: string }
  ): Promise<CalldataVerificationFacet> {
    return super.deploy(overrides || {}) as Promise<CalldataVerificationFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
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
