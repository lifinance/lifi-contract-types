/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NXTPFacet, NXTPFacetInterface } from "../NXTPFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "lifiTransactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nxtpTransactionId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "receivingChainTxManagerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "initiator",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
    ],
    name: "NXTPBridgeStarted",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "completeBridgeTokensViaNXTP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNXTPTransactionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransactionManager",
        name: "_txMgrAddr",
        type: "address",
      },
    ],
    name: "initNXTP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "receivingChainTxManagerAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "address",
                name: "router",
                type: "address",
              },
              {
                internalType: "address",
                name: "initiator",
                type: "address",
              },
              {
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
              },
              {
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
              },
              {
                internalType: "address",
                name: "sendingChainFallback",
                type: "address",
              },
              {
                internalType: "address",
                name: "receivingAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "callTo",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "sendingChainId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "receivingChainId",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "callDataHash",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
              },
            ],
            internalType: "struct ITransactionManager.InvariantTransactionData",
            name: "invariantData",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "encryptedCallData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encodedBid",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "bidSignature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encodedMeta",
            type: "bytes",
          },
        ],
        internalType: "struct ITransactionManager.PrepareArgs",
        name: "_nxtpData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaNXTP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "finalAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "swapAndCompleteBridgeTokensViaNXTP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "receivingChainTxManagerAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "address",
                name: "router",
                type: "address",
              },
              {
                internalType: "address",
                name: "initiator",
                type: "address",
              },
              {
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
              },
              {
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
              },
              {
                internalType: "address",
                name: "sendingChainFallback",
                type: "address",
              },
              {
                internalType: "address",
                name: "receivingAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "callTo",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "sendingChainId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "receivingChainId",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "callDataHash",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
              },
            ],
            internalType: "struct ITransactionManager.InvariantTransactionData",
            name: "invariantData",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "encryptedCallData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encodedBid",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "bidSignature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encodedMeta",
            type: "bytes",
          },
        ],
        internalType: "struct ITransactionManager.PrepareArgs",
        name: "_nxtpData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaNXTP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ea4806100206000396000f3fe6080604052600436106100555760003560e01c806328225f0c1461005a5780632a7a70421461006f5780634f7c96b5146100825780637d7aecd3146100cd578063bfa1fc0a146100e0578063cf76d31314610100575b600080fd5b61006d610068366004611579565b610113565b005b61006d61007d366004611672565b61021c565b34801561008e57600080fd5b507fcb4800033539e504944b70f0275e98829f191b99c5226e9a5a072ab49d2a753e54604080516001600160a01b039092168252519081900360200190f35b61006d6100db3660046116ff565b61033c565b3480156100ec57600080fd5b5061006d6100fb3660046114c4565b610444565b61006d61010e3660046115e2565b61048d565b6001600160a01b03831661016f5780341461016a5760405162461bcd60e51b81526020600482015260126024820152711253959053125117d1551217d05353d5539560721b60448201526064015b60405180910390fd5b6101b8565b34156101ac5760405162461bcd60e51b815260206004820152600c60248201526b4554485f574954485f45524360a01b6044820152606401610161565b6101b883333084610561565b6101c3838383610573565b8351604080516001600160a01b038087168252851660208201529081018390524260608201527fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a250505050565b805160800151600061022d8261059c565b905060005b60ff811685111561028157865161026f90878760ff851681811061025857610258611e2a565b905060200281019061026a9190611c9b565b610631565b8061027981611df4565b915050610232565b5060008161028e8461059c565b6102989190611db1565b9050600081116102ba5760405162461bcd60e51b815260040161016190611b7e565b6020840181905286516102cd9085610833565b86600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc46886020015189604001518a606001518b608001518c60a001518d60e001518e60c001514260405161032b989796959493929190611b26565b60405180910390a250505050505050565b8051608001516001600160a01b03811661037857816020015134146103735760405162461bcd60e51b815260040161016190611b7e565b6103cd565b60006103838261059c565b90506103958233308660200151610561565b8260200151816103a48461059c565b6103ae9190611db1565b146103cb5760405162461bcd60e51b815260040161016190611b7e565b505b82516103d99083610833565b82600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4684602001518560400151866060015187608001518860a001518960e001518a60c0015142604051610437989796959493929190611b26565b60405180910390a2505050565b7fcb4800033539e504944b70f0275e98829f191b99c5226e9a5a072ab49d2a753e61046d610968565b80546001600160a01b0319166001600160a01b0392909216919091179055565b60006104988361059c565b905060005b60ff81168511156104d55786516104c390878760ff851681811061025857610258611e2a565b806104cd81611df4565b91505061049d565b5060006104e18461059c565b9050600082821115610504576104f78383611db1565b9050610504858583610573565b8751604080516001600160a01b038089168252871660208201529081018390524260608201527fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a25050505050505050565b61056d848484846109f1565b50505050565b6001600160a01b038316156105925761058d838383610a5c565b505050565b61058d8282610a67565b60006001600160a01b03821615610629576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156105ec57600080fd5b505afa158015610600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106249190611867565b61062b565b475b92915050565b608081018035906000906106519061064c90606086016114c4565b61059c565b9050600061066560608501604086016114c4565b90506001600160a01b038116151580156106865750826106848261059c565b105b156106a6576106a661069e60608601604087016114c4565b333086610561565b6001600160a01b038116156106cf576106cf816106c960408701602088016114c4565b85610af5565b6000806106df60208701876114c4565b6001600160a01b0316346106f660a0890189611c55565b6040516107049291906119b7565b60006040518083038185875af1925050503d8060008114610741576040519150601f19603f3d011682016040523d82523d6000602084013e610746565b606091505b50915091508161077757600061075b82610baa565b90508060405162461bcd60e51b81526004016101619190611b13565b8361078b61064c6080890160608a016114c4565b6107959190611db1565b93507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38876107c660208901896114c4565b6107d660608a0160408b016114c4565b6107e660808b0160608c016114c4565b604080519485526001600160a01b0393841660208601529183168483015290911660608301526080820188905260a082018790524260c0830152519081900360e00190a150505050505050565b8051608001517fcb4800033539e504944b70f0275e98829f191b99c5226e9a5a072ab49d2a753e8054602084015191929161087b9183916001600160a01b0390911690610af5565b60006001600160a01b03821615610893576000610895565b345b8354604051636ca2c9b960e11b81529192506000916001600160a01b039091169063d94593729084906108cc908990600401611baa565b610200604051808303818588803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061091f9190611762565b9050857ff41c17e1ecd5e0c8547f6e40103b41a4a94721c4b4f1445206a69a58e563aa35826101400151836040516109589291906119e3565b60405180910390a2505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146109ef5760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610161565b565b6040516001600160a01b038085166024830152831660448201526064810182905261056d9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c28565b61058d838383610cfa565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610ab4576040519150601f19603f3d011682016040523d82523d6000602084013e610ab9565b606091505b505090508061058d5760405162461bcd60e51b8152602060048201526008602482015267046a89c82746064760c31b6044820152606401610161565b6001600160a01b038316610b0857505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b158015610b5357600080fd5b505afa158015610b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8b9190611867565b90508015610b9f57610b9f84846000610d2a565b61056d848484610e4e565b6060604482511015610bef57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610c0b6004808551610c039190611db1565b859190610f0f565b905080806020019051810190610c219190611503565b9392505050565b6000610c7d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661101c9092919063ffffffff16565b80519091501561058d5780806020019051810190610c9b91906114e1565b61058d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610161565b6040516001600160a01b03831660248201526044810182905261058d90849063a9059cbb60e01b90606401610a25565b801580610db35750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610d7957600080fd5b505afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611867565b155b610e1e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610161565b6040516001600160a01b03831660248201526044810182905261058d90849063095ea7b360e01b90606401610a25565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015610e9a57600080fd5b505afa158015610eae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed29190611867565b610edc9190611d99565b6040516001600160a01b03851660248201526044810182905290915061056d90859063095ea7b360e01b90606401610a25565b606081610f1d81601f611d99565b1015610f5c5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610161565b610f668284611d99565b84511015610faa5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610161565b606082158015610fc95760405191506000825260208201604052611013565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611002578051835260209283019201610fea565b5050858452601f01601f1916604052505b50949350505050565b606061102b8484600085611033565b949350505050565b6060824710156110945760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610161565b843b6110e25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610161565b600080866001600160a01b031685876040516110fe91906119c7565b60006040518083038185875af1925050503d806000811461113b576040519150601f19603f3d011682016040523d82523d6000602084013e611140565b606091505b509150915061115082828661115b565b979650505050505050565b6060831561116a575081610c21565b82511561117a5782518084602001fd5b8160405162461bcd60e51b81526004016101619190611b13565b803561119f81611e56565b919050565b805161119f81611e56565b60008083601f8401126111c157600080fd5b5081356001600160401b038111156111d857600080fd5b6020830191508360208260051b85010111156111f357600080fd5b9250929050565b600082601f83011261120b57600080fd5b813561121e61121982611d72565b611d42565b81815284602083860101111561123357600080fd5b816020850160208301376000918101602001919091529392505050565b60006101a0828403121561126357600080fd5b61126b611cb1565b905061127682611194565b815261128460208301611194565b602082015261129560408301611194565b60408201526112a660608301611194565b60608201526112b760808301611194565b60808201526112c860a08301611194565b60a08201526112d960c08301611194565b60c08201526112ea60e08301611194565b60e08201526101006112fd818401611194565b908201526101208281013590820152610140808301359082015261016080830135908201526101809182013591810191909152919050565b6000610100828403121561134857600080fd5b611350611cda565b90508135815260208201356001600160401b0381111561136f57600080fd5b61137b848285016111fa565b60208301525061138d60408301611194565b604082015261139e60608301611194565b60608201526113af60808301611194565b60808201526113c060a08301611194565b60a082015260c082013560c082015260e082013560e082015292915050565b600061026082840312156113f257600080fd5b6113fa611cfd565b90506114068383611250565b81526101a082013560208201526101c082013560408201526101e08201356001600160401b038082111561143957600080fd5b611445858386016111fa565b606084015261020084013591508082111561145f57600080fd5b61146b858386016111fa565b608084015261022084013591508082111561148557600080fd5b611491858386016111fa565b60a08401526102408401359150808211156114ab57600080fd5b506114b8848285016111fa565b60c08301525092915050565b6000602082840312156114d657600080fd5b8135610c2181611e56565b6000602082840312156114f357600080fd5b81518015158114610c2157600080fd5b60006020828403121561151557600080fd5b81516001600160401b0381111561152b57600080fd5b8201601f8101841361153c57600080fd5b805161154a61121982611d72565b81815285602083850101111561155f57600080fd5b611570826020830160208601611dc8565b95945050505050565b6000806000806080858703121561158f57600080fd5b84356001600160401b038111156115a557600080fd5b6115b187828801611335565b94505060208501356115c281611e56565b925060408501356115d281611e56565b9396929550929360600135925050565b6000806000806000608086880312156115fa57600080fd5b85356001600160401b038082111561161157600080fd5b61161d89838a01611335565b9650602088013591508082111561163357600080fd5b50611640888289016111af565b909550935050604086013561165481611e56565b9150606086013561166481611e56565b809150509295509295909350565b6000806000806060858703121561168857600080fd5b84356001600160401b038082111561169f57600080fd5b6116ab88838901611335565b955060208701359150808211156116c157600080fd5b6116cd888389016111af565b909550935060408701359150808211156116e657600080fd5b506116f3878288016113df565b91505092959194509250565b6000806040838503121561171257600080fd5b82356001600160401b038082111561172957600080fd5b61173586838701611335565b9350602085013591508082111561174b57600080fd5b50611758858286016113df565b9150509250929050565b6000610200828403121561177557600080fd5b61177d611d1f565b611786836111a4565b8152611794602084016111a4565b60208201526117a5604084016111a4565b60408201526117b6606084016111a4565b60608201526117c7608084016111a4565b60808201526117d860a084016111a4565b60a08201526117e960c084016111a4565b60c08201526117fa60e084016111a4565b60e082015261010061180d8185016111a4565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b60006020828403121561187957600080fd5b5051919050565b60008151808452611898816020860160208601611dc8565b601f01601f19169290920160200192915050565b80516001600160a01b0316825260208101516118d360208401826001600160a01b03169052565b5060408101516118ee60408401826001600160a01b03169052565b50606081015161190960608401826001600160a01b03169052565b50608081015161192460808401826001600160a01b03169052565b5060a081015161193f60a08401826001600160a01b03169052565b5060c081015161195a60c08401826001600160a01b03169052565b5060e081015161197560e08401826001600160a01b03169052565b50610100818101516001600160a01b03169083015261012080820151908301526101408082015190830152610160808201519083015261018090810151910152565b8183823760009101908152919050565b600082516119d9818460208701611dc8565b9190910192915050565b82815281516001600160a01b03166020820152610220810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a08301516001600160a01b03811660c08401525060c08301516001600160a01b03811660e08401525060e0830151610100611a95818501836001600160a01b03169052565b8401519050610120611ab1848201836001600160a01b03169052565b8401516101408481019190915284015161016080850191909152840151610180808501919091528401516101a0808501919091528401516101c0808501919091528401516101e080850191909152909301516102009092019190915292915050565b602081526000610c216020830184611880565b6000610100808352611b3a8184018c611880565b6001600160a01b039a8b166020850152988a1660408401525050948716606086015292909516608084015260a083015260c082019390935260e00191909152919050565b60208082526012908201527111549497d253959053125117d05353d5539560721b604082015260600190565b60208152611bbc6020820183516118ac565b60208201516101c082015260408201516101e08201526000606083015161026080610200850152611bf1610280850183611880565b91506080850151601f198086850301610220870152611c108483611880565b935060a087015191508086850301610240870152611c2e8483611880565b935060c0870151915080868503018387015250611c4b8382611880565b9695505050505050565b6000808335601e19843603018112611c6c57600080fd5b8301803591506001600160401b03821115611c8657600080fd5b6020019150368190038213156111f357600080fd5b6000823560be198336030181126119d957600080fd5b6040516101a081016001600160401b0381118282101715611cd457611cd4611e40565b60405290565b60405161010081016001600160401b0381118282101715611cd457611cd4611e40565b60405160e081016001600160401b0381118282101715611cd457611cd4611e40565b60405161020081016001600160401b0381118282101715611cd457611cd4611e40565b604051601f8201601f191681016001600160401b0381118282101715611d6a57611d6a611e40565b604052919050565b60006001600160401b03821115611d8b57611d8b611e40565b50601f01601f191660200190565b60008219821115611dac57611dac611e14565b500190565b600082821015611dc357611dc3611e14565b500390565b60005b83811015611de3578181015183820152602001611dcb565b8381111561056d5750506000910152565b600060ff821660ff811415611e0b57611e0b611e14565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611e6b57600080fd5b5056fea2646970667358221220cf06605ace617783625984550bec5588b28adb78c5eea4faa99c166b6343259064736f6c63430008070033";

export class NXTPFacet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NXTPFacet> {
    return super.deploy(overrides || {}) as Promise<NXTPFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NXTPFacet {
    return super.attach(address) as NXTPFacet;
  }
  connect(signer: Signer): NXTPFacet__factory {
    return super.connect(signer) as NXTPFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NXTPFacetInterface {
    return new utils.Interface(_abi) as NXTPFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NXTPFacet {
    return new Contract(address, _abi, signerOrProvider) as NXTPFacet;
  }
}
