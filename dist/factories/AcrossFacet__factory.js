/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_spokePool",
                type: "address",
                internalType: "contract IAcrossSpokePool",
            },
            {
                name: "_wrappedNative",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcross",
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
                name: "_acrossData",
                type: "tuple",
                internalType: "struct AcrossFacet.AcrossData",
                components: [
                    {
                        name: "relayerFeePct",
                        type: "int64",
                        internalType: "int64",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "maxCount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaAcross",
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
                name: "_acrossData",
                type: "tuple",
                internalType: "struct AcrossFacet.AcrossData",
                components: [
                    {
                        name: "relayerFeePct",
                        type: "int64",
                        internalType: "int64",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "maxCount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "AssetSwapped",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "dex",
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
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
];
const _bytecode = "0x60c060405234801561000f575f5ffd5b50604051611d58380380611d5883398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611c956100c35f395f6105c501525f818161059a0152818161067701526106a20152611c955ff3fe608060405260043610610028575f3560e01c80631fd8010c1461002c5780633a3f733214610041575b5f5ffd5b61003f61003a3660046116e4565b610054565b005b61003f61004f366004611749565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df344761180f565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f84610269858561180f565b6107b1565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610304344761180f565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b336107e6565b60c08b01526104788a88610555565b504791505081811115610494576104945f84610269858561180f565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610928565b608082015173ffffffffffffffffffffffffffffffffffffffff1661066d5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906105f46020890189611847565b61060460408a0160208b0161186e565b61061160408b018b611891565b8b606001356040518b63ffffffff1660e01b815260040161063a999897969594939291906118f9565b5f604051808303818588803b158015610651575f5ffd5b505af1158015610663573d5f5f3e3d5ffd5b5050505050610776565b6106a082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610980565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e00151865f0160208101906107029190611847565b6107126040890160208a0161186e565b61071f60408a018a611891565b8a606001356040518a63ffffffff1660e01b8152600401610748999897969594939291906118f9565b5f604051808303815f87803b15801561075f575f5ffd5b505af1158015610771573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107a591906119fe565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166107db576107d682826109ac565b505050565b6107d6838383610a19565b5f82808203610821576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561082f60018561180f565b81811061083e5761083e611b11565b90506020028101906108509190611b3e565b610861906080810190606001611b7a565b90505f61086d82610a87565b905073ffffffffffffffffffffffffffffffffffffffff821661089757610894348261180f565b90505b5f6108a28888610ad1565b90506108ae8888610bdb565b6108bb8a89898985610c47565b5f826108c685610a87565b6108d0919061180f565b90508981101561091a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661097357637939f4245f526004601cfd5b5f60605260405250505050565b6107d68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ff2565b73ffffffffffffffffffffffffffffffffffffffff82166109f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff83168261111f565b73ffffffffffffffffffffffffffffffffffffffff8216610a66576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d673ffffffffffffffffffffffffffffffffffffffff84168383611138565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ac957610ac473ffffffffffffffffffffffffffffffffffffffff831630611181565b610acb565b475b92915050565b6060815f8167ffffffffffffffff811115610aee57610aee6114af565b604051908082528060200260200182016040528015610b17578160200160208202803683370190505b5090505f805b83811015610bd057868682818110610b3757610b37611b11565b9050602002810190610b499190611b3e565b610b5a906080810190606001611b7a565b9150610b6582610a87565b838281518110610b7757610b77611b11565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bc85734838281518110610bb057610bb0611b11565b60200260200101818151610bc4919061180f565b9052505b600101610b1d565b509095945050505050565b5f5b818110156107d65736838383818110610bf857610bf8611b11565b9050602002810190610c0a9190611b3e565b9050610c1c60e0820160c08301611b93565b15610c3e57610c3e610c346060830160408401611b7a565b82608001356104a1565b50600101610bdd565b838383838260018114610f0e575f8585610c6260018561180f565b818110610c7157610c71611b11565b9050602002810190610c839190611b3e565b610c94906080810190606001611b7a565b90505f89815b81811015610e3b57368d8d83818110610cb557610cb5611b11565b9050602002810190610cc79190611b3e565b9050610cf6610cdc6060830160408401611b7a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d585750610d58610d0f6040830160208401611b7a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d6f5750610d6f610d0f6020830183611b7a565b8015610df25750610df2610d8660a0830183611891565b610d94916004915f91611bac565b610d9d91611bd3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e28576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e328f826111b4565b50600101610c9a565b505f90505b610e4b60018561180f565b811015610f06575f888883818110610e6557610e65611b11565b9050602002810190610e779190611b3e565b610e88906080810190606001611b7a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610efd57858281518110610ecf57610ecf611b11565b6020026020010151610ee082610a87565b610eea919061180f565b92508215610efd57610efd8188856107b1565b50600101610e40565b505050610fe6565b875f5b81811015610fe357368b8b83818110610f2c57610f2c611b11565b9050602002810190610f3e9190611b3e565b9050610f53610cdc6060830160408401611b7a565b80610f6c5750610f6c610d0f6040830160208401611b7a565b8015610f835750610f83610d0f6020830183611b7a565b8015610f9a5750610f9a610d8660a0830183611891565b610fd0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fda8d826111b4565b50600101610f11565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111195773ffffffffffffffffffffffffffffffffffffffff831661105b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156110ce573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110f29190611c39565b10156111195761111973ffffffffffffffffffffffffffffffffffffffff85168483611427565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611178576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111cc6111c46020830183611b7a565b6017903b1190565b611202576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611241576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611255610cdc6060850160408601611b7a565b61125f575f611265565b82608001355b90505f61128061127b6080860160608701611b7a565b610a87565b9050815f036112b6576112b661129c6060860160408701611b7a565b6112ac6040870160208801611b7a565b8660800135610980565b5f806112c56020870187611b7a565b73ffffffffffffffffffffffffffffffffffffffff16846112e960a0890189611891565b6040516112f7929190611c50565b5f6040518083038185875af1925050503d805f8114611331576040519150601f19603f3d011682016040523d82523d5f602084013e611336565b606091505b50915091508161134957611349816114a5565b5f61135d61127b6080890160608a01611b7a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861138e60208a018a611b7a565b61139e60608b0160408c01611b7a565b6113ae60808c0160608d01611b7a565b8b608001358987116113c057866113ca565b6113ca8a8861180f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611178575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661117857633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611500576115006114af565b60405290565b5f82601f830112611515575f5ffd5b813567ffffffffffffffff81111561152f5761152f6114af565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561157c5761157c6114af565b604052818152838201602001851015611593575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146115d2575f5ffd5b919050565b803580151581146115d2575f5ffd5b5f61014082840312156115f7575f5ffd5b6115ff6114dc565b823581529050602082013567ffffffffffffffff81111561161e575f5ffd5b61162a84828501611506565b602083015250604082013567ffffffffffffffff811115611649575f5ffd5b61165584828501611506565b604083015250611667606083016115af565b6060820152611678608083016115af565b608082015261168960a083016115af565b60a082015260c0828101359082015260e080830135908201526116af61010083016115d7565b6101008201526116c261012083016115d7565b61012082015292915050565b5f608082840312156116de575f5ffd5b50919050565b5f5f604083850312156116f5575f5ffd5b823567ffffffffffffffff81111561170b575f5ffd5b611717858286016115e6565b925050602083013567ffffffffffffffff811115611733575f5ffd5b61173f858286016116ce565b9150509250929050565b5f5f5f5f6060858703121561175c575f5ffd5b843567ffffffffffffffff811115611772575f5ffd5b61177e878288016115e6565b945050602085013567ffffffffffffffff81111561179a575f5ffd5b8501601f810187136117aa575f5ffd5b803567ffffffffffffffff8111156117c0575f5ffd5b8760208260051b84010111156117d4575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156117f7575f5ffd5b611803878288016116ce565b91505092959194509250565b81810381811115610acb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611857575f5ffd5b81358060070b8114611867575f5ffd5b9392505050565b5f6020828403121561187e575f5ffd5b813563ffffffff81168114611867575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126118c4575f5ffd5b83018035915067ffffffffffffffff8211156118de575f5ffd5b6020019150368190038213156118f2575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8a16815273ffffffffffffffffffffffffffffffffffffffff891660208201528760408201528660608201528560070b608082015263ffffffff851660a082015261010060c08201528261010082015282846101208301375f61012084830101525f6101207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011683010190508260e08301529a9950505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a256101608401826119b2565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a6082826119b2565b9150506060840151611a8a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611af961012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b70575f5ffd5b9190910192915050565b5f60208284031215611b8a575f5ffd5b611867826115af565b5f60208284031215611ba3575f5ffd5b611867826115d7565b5f5f85851115611bba575f5ffd5b83861115611bc6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c32577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c49575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220f7e9b0163c451f649b684ca7439e9080cee858bffdf916cad4c9467b29a0feff64736f6c634300081d0033";
const isSuperArgs = (xs) => xs.length > 1;
export class AcrossFacet__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_spokePool, _wrappedNative, overrides) {
        return super.deploy(_spokePool, _wrappedNative, overrides || {});
    }
    getDeployTransaction(_spokePool, _wrappedNative, overrides) {
        return super.getDeployTransaction(_spokePool, _wrappedNative, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
