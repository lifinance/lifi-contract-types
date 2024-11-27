"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StargateFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_composer",
                type: "address",
                internalType: "contract IStargateRouter",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "initStargate",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                internalType: "struct StargateFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "layerZeroChainId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteLayerZeroFee",
        inputs: [
            {
                name: "_destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "setLayerZeroChainId",
        inputs: [
            {
                name: "_chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_layerZeroChainId",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaStargate",
        inputs: [
            {
                name: "_bridgeData",
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
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaStargate",
        inputs: [
            {
                name: "_bridgeData",
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
                name: "_swapData",
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
            {
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "LayerZeroChainIdSet",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "layerZeroChainId",
                type: "uint16",
                indexed: false,
                internalType: "uint16",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiGenericSwapCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiSwappedGeneric",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferRecovered",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferStarted",
        inputs: [
            {
                name: "bridgeData",
                type: "tuple",
                indexed: false,
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
        anonymous: false,
    },
    {
        type: "event",
        name: "PartnerSwap",
        inputs: [
            {
                name: "partnerId",
                type: "bytes2",
                indexed: false,
                internalType: "bytes2",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "StargateInitialized",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                indexed: false,
                internalType: "struct StargateFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "layerZeroChainId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CannotBridgeToSameNetwork",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractCallNotAllowed",
        inputs: [],
    },
    {
        type: "error",
        name: "CumulativeSlippageTooHigh",
        inputs: [
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receivedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InformationMismatch",
        inputs: [],
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "required",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapDataProvided",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapFromZeroBalance",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotInitialized",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "OnlyContractOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
    {
        type: "error",
        name: "UnknownLayerZeroChain",
        inputs: [],
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b50604051620030ae380380620030ae833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051613005620000a96000396000818161044201528181610ac401528181610bfc0152610c2701526130056000f3fe60806040526004361061005a5760003560e01c8063c07386e611610043578063c07386e614610094578063d35794fd146100cd578063ed178619146100ed57600080fd5b8063023f34ae1461005f578063be1eace714610081575b600080fd5b34801561006b57600080fd5b5061007f61007a3660046124f1565b610100565b005b61007f61008f36600461257f565b610226565b3480156100a057600080fd5b506100b46100af3660046125ec565b61043d565b6040805192835260208301919091520160405180910390f35b3480156100d957600080fd5b5061007f6100e8366004612640565b610563565b61007f6100fb36600461289e565b61065e565b61010861085b565b7f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d60005b828110156101b8578383828181106101465761014661295d565b905060400201602001602081019061015e919061298c565b8260008686858181106101735761017361295d565b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff16021790555080806101b0906129d6565b91505061012c565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f1312bdf143ed16255aacc1dd4f17486d8c39e7efcfa4aa1d9e821629ff203b8d906102199085908590612a0e565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102b23447612a60565b90506102bd85612a73565b806101000151156102fa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030386612a73565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610354576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610392576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103cf576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e16103db88612a73565b876108d0565b6103fe6103f460a0890160808a01612a7f565b8860c00135610927565b61041061040a88612a73565b87610aa3565b50479050818111156104315761043160008461042c8585612a60565b610dcb565b50506000909155505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a51236961048586610dfc565b600161049460c0880188612a9c565b6104a160e08a018a612a9c565b60408051606080820183528d013581526000602080830182905283519081019190915282518082036014018152603490910183528183015290517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b1681526105179796959493929190600401612be1565b6040805180830381865afa158015610533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105579190612c3d565b915091505b9250929050565b61056b61085b565b7f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5e547f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d9060ff166105e8576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838152602082815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff8616908117909155915191825284917fa51f0b4ec175b5bcd05e1dfff3bac4a47454a5b2bae58e440c736a77f6117cb7910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106ea3447612a60565b905086806101000151610729576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761074c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610783576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036107c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036107fe576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080889876108d0565b61082289600001518a60c001518a8a338b60800135610e70565b60c08a01526108318987610aa3565b504790508181111561084d5761084d60008461042c8585612a60565b505060009091555050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146108ce576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610120820151151560006108e760e0840184612a9c565b905011151514610923576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610961576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b65780341015610923576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a479190612c61565b905081811015610a92576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610a9e8333308561100b565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610bf2577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e622688982608001358460c00151610b129190612c7a565b610b1f8560e00151610dfc565b610b2f60c0860160a08701612a7f565b610b3c60c0870187612a9c565b60408051808201825260c08b01518152898201356020808301919091528251606080820185528c01358152600081830181905284519283015283516014818403018152603490920184529192820152610b9860e08b018b612a9c565b6040518a63ffffffff1660e01b8152600401610bbb989796959493929190612c8d565b6000604051808303818588803b158015610bd457600080fd5b505af1158015610be8573d6000803e3d6000fd5b5050505050610d3e565b610c2582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611225565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639fbf10fc8260800135610c738560e00151610dfc565b84356020860135610c8a60c0880160a08901612a7f565b60c089015160408051606080820183528b01358152600060208083018290528351908101919091528251601481830301815260349091018352828c013592820152610cd860c08c018c612a9c565b610ce560e08e018e612a9c565b6040518d63ffffffff1660e01b8152600401610d0b9b9a99989796959493929190612d0e565b6000604051808303818588803b158015610d2457600080fd5b505af1158015610d38573d6000803e3d6000fd5b50505050505b6040517e0600000000000000000000000000000000000000000000000000000000000081527f85ce809fd9fd62b920fadc9d3a3a8e642d3969bf635276bfbdde866acce409fc9060200160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610dbf9190612d9d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610df257610a9e838383611368565b610a9e82826114ea565b60008181527f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d6020819052604082205461ffff16808303610e69576040517f7c152fe300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b600083808203610eac576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610ebb600185612a60565b818110610eca57610eca61295d565b9050602002810190610edc9190612eb0565b610eed906080810190606001612a7f565b90506000610efa82611614565b905073ffffffffffffffffffffffffffffffffffffffff8216610f2457610f213482612a60565b90505b6000610f3089896116cd565b9050610f3c89896117d9565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610f77818b8b85611846565b600083610f8386611614565b610f8d9190612a60565b905073ffffffffffffffffffffffffffffffffffffffff8516610fb757610fb48882612a60565b90505b8b811015610ffb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610a89565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611058576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110a5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611116573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113a9190612c61565b905061114882868686611c37565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156111b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111dc9190612c61565b6111e69190612a60565b1461121d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661124557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611292576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611307573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132b9190612c61565b1015610a9e5761133d83836000611d13565b610a9e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d13565b73ffffffffffffffffffffffffffffffffffffffff83166113b5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611402576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561146f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114939190612c61565b9050808211156114d9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a89565b6114e4848484611e95565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611537576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561157a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a89565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146115d4576040519150601f19603f3d011682016040523d82523d6000602084013e6115d9565b606091505b5050905080610a9e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156116c5576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561169c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c09190612c61565b6116c7565b475b92915050565b60608160008167ffffffffffffffff8111156116eb576116eb61266c565b604051908082528060200260200182016040528015611714578160200160208202803683370190505b5090506000805b838110156117ce578686828181106117355761173561295d565b90506020028101906117479190612eb0565b611758906080810190606001612a7f565b915061176382611614565b8382815181106117755761177561295d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166117c657348382815181106117ae576117ae61295d565b602002602001018181516117c29190612a60565b9052505b60010161171b565b509095945050505050565b60005b81811015610a9e57368383838181106117f7576117f761295d565b90506020028101906118099190612eb0565b905061181b60e0820160c08301612eee565b1561183d5761183d6118336060830160408401612a7f565b8260800135610927565b506001016117dc565b602084015160408501518491849184908360018114611b50576000868661186e600185612a60565b81811061187d5761187d61295d565b905060200281019061188f9190612eb0565b6118a0906080810190606001612a7f565b9050600089815b81811015611a4d57368d8d838181106118c2576118c261295d565b90506020028101906118d49190612eb0565b90506119036118e96060830160408401612a7f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611966575061196661191c6040830160208401612a7f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561197d575061197d61191c6020830183612a7f565b8015611a025750611a0261199460a0830183612a9c565b6119a391600491600091612f0b565b6119ac91612f35565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611a38576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611a449082611eeb565b506001016118a7565b505060005b611a5d600185612a60565b811015611b48576000898983818110611a7857611a7861295d565b9050602002810190611a8a9190612eb0565b611a9b906080810190606001612a7f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611b3f57868281518110611ae257611ae261295d565b6020026020010151611af382611614565b611afd9190612a60565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611b24576000611b26565b865b90508315611b3d57611b3d828a61042c8488612a60565b505b50600101611a52565b505050611c2b565b8760005b81811015611c2857368b8b83818110611b6f57611b6f61295d565b9050602002810190611b819190612eb0565b9050611b966118e96060830160408401612a7f565b80611baf5750611baf61191c6040830160208401612a7f565b8015611bc65750611bc661191c6020830183612a7f565b8015611bdd5750611bdd61199460a0830183612a9c565b611c13576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611c1f9082611eeb565b50600101611b54565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114e49085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526121c9565b801580611db357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db19190612c61565b155b611e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a89565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a9e9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611c91565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a9e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c91565b611f01611efb6020830183612a7f565b3b151590565b611f37576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611f77576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f8c6118e96060850160408601612a7f565b611f97576000611f9d565b82608001355b90506000611fb9611fb46060860160408701612a7f565b611614565b90506000611fd0611fb46080870160608801612a7f565b90508260000361200757612007611fed6060870160408801612a7f565b611ffd6040880160208901612a7f565b8760800135611225565b8460800135821015612052576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a89565b6000806120626020880188612a7f565b73ffffffffffffffffffffffffffffffffffffffff168561208660a08a018a612a9c565b604051612094929190612f7d565b60006040518083038185875af1925050503d80600081146120d1576040519150601f19603f3d011682016040523d82523d6000602084013e6120d6565b606091505b5091509150816120e9576120e9816122d8565b60006120fe611fb460808a0160608b01612a7f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961212f60208b018b612a7f565b61213f60608c0160408d01612a7f565b61214f60808d0160608e01612a7f565b8c60800135898711612161578661216b565b61216b8a88612a60565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600061222b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122e29092919063ffffffff16565b905080516000148061224c57508080602001905181019061224c9190612f8d565b610a9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a89565b8051602082018181fd5b60606122f184846000856122f9565b949350505050565b60608247101561238b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a89565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123b49190612faa565b60006040518083038185875af1925050503d80600081146123f1576040519150601f19603f3d011682016040523d82523d6000602084013e6123f6565b606091505b509150915061240787838387612412565b979650505050505050565b606083156124a85782516000036124a15773ffffffffffffffffffffffffffffffffffffffff85163b6124a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a89565b50816122f1565b6122f183838151156124bd5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a899190612fbc565b6000806020838503121561250457600080fd5b823567ffffffffffffffff8082111561251c57600080fd5b818501915085601f83011261253057600080fd5b81358181111561253f57600080fd5b8660208260061b850101111561255457600080fd5b60209290920196919550909350505050565b6000610100828403121561257957600080fd5b50919050565b6000806040838503121561259257600080fd5b823567ffffffffffffffff808211156125aa57600080fd5b9084019061014082870312156125bf57600080fd5b909250602084013590808211156125d557600080fd5b506125e285828601612566565b9150509250929050565b600080604083850312156125ff57600080fd5b82359150602083013567ffffffffffffffff81111561261d57600080fd5b6125e285828601612566565b803561ffff8116811461263b57600080fd5b919050565b6000806040838503121561265357600080fd5b8235915061266360208401612629565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156126bf576126bf61266c565b60405290565b600082601f8301126126d657600080fd5b813567ffffffffffffffff808211156126f1576126f161266c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156127375761273761266c565b8160405283815286602085880101111561275057600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461279257600080fd5b50565b803561263b81612770565b801515811461279257600080fd5b803561263b816127a0565b600061014082840312156127cc57600080fd5b6127d461269b565b905081358152602082013567ffffffffffffffff808211156127f557600080fd5b612801858386016126c5565b6020840152604084013591508082111561281a57600080fd5b50612827848285016126c5565b60408301525061283960608301612795565b606082015261284a60808301612795565b608082015261285b60a08301612795565b60a082015260c082013560c082015260e082013560e08201526101006128828184016127ae565b908201526101206128948382016127ae565b9082015292915050565b600080600080606085870312156128b457600080fd5b843567ffffffffffffffff808211156128cc57600080fd5b6128d8888389016127b9565b955060208701359150808211156128ee57600080fd5b818701915087601f83011261290257600080fd5b81358181111561291157600080fd5b8860208260051b850101111561292657600080fd5b60208301955080945050604087013591508082111561294457600080fd5b5061295187828801612566565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561299e57600080fd5b610e6982612629565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612a0757612a076129a7565b5060010190565b6020808252818101839052600090604080840186845b87811015612a53578135835261ffff612a3e868401612629565b16838601529183019190830190600101612a24565b5090979650505050505050565b818103818111156116c7576116c76129a7565b60006116c736836127b9565b600060208284031215612a9157600080fd5b8135610e6981612770565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612ad157600080fd5b83018035915067ffffffffffffffff821115612aec57600080fd5b60200191503681900382131561055c57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60005b83811015612b65578181015183820152602001612b4d565b50506000910152565b60008151808452612b86816020860160208601612b4a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805182526020810151602083015260006040820151606060408501526122f16060850182612b6e565b61ffff8816815260ff8716602082015260a060408201526000612c0860a083018789612b01565b8281036060840152612c1b818688612b01565b90508281036080840152612c2f8185612bb8565b9a9950505050505050505050565b60008060408385031215612c5057600080fd5b505080516020909101519092909150565b600060208284031215612c7357600080fd5b5051919050565b808201808211156116c7576116c76129a7565b61ffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015260e060408201526000612cc760e08301888a612b01565b865160608401526020870151608084015282810360a0840152612cea8187612bb8565b905082810360c0840152612cff818587612b01565b9b9a5050505050505050505050565b600061012061ffff8e1683528c60208401528b604084015273ffffffffffffffffffffffffffffffffffffffff8b1660608401528960808401528860a08401528060c0840152612d6081840189612bb8565b905082810360e0840152612d75818789612b01565b9050828103610100840152612d8b818587612b01565b9e9d5050505050505050505050505050565b602081528151602082015260006020830151610140806040850152612dc6610160850183612b6e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612e018382612b6e565b9250506060850151612e2b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612e9e8187018315159052565b90950151151593019290925250919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612ee457600080fd5b9190910192915050565b600060208284031215612f0057600080fd5b8135610e69816127a0565b60008085851115612f1b57600080fd5b83861115612f2857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612f755780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612f9f57600080fd5b8151610e69816127a0565b60008251612ee4818460208701612b4a565b602081526000610e696020830184612b6e56fea264697066735822122043c23bdf7bc045acb63a7dd0495db2db4ef1136e4137f17785eb3bf609b841ea64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class StargateFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_composer, overrides) {
        return super.deploy(_composer, overrides || {});
    }
    getDeployTransaction(_composer, overrides) {
        return super.getDeployTransaction(_composer, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StargateFacet__factory = StargateFacet__factory;
Object.defineProperty(StargateFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(StargateFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=StargateFacet__factory.js.map