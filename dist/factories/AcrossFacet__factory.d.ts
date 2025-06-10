import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611e4c380380611e4c83398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611d896100c35f395f6105c501525f818161059a0152818161067701526106a20152611d895ff3fe608060405260043610610028575f3560e01c80631fd8010c1461002c5780633a3f733214610041575b5f5ffd5b61003f61003a3660046117d8565b610054565b005b61003f61004f36600461183d565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611903565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f846102698585611903565b6107b1565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103043447611903565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b336107e6565b60c08b01526104788a88610555565b504791505081811115610494576104945f846102698585611903565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610929565b608082015173ffffffffffffffffffffffffffffffffffffffff1661066d5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906105f4602089018961193b565b61060460408a0160208b01611962565b61061160408b018b611985565b8b606001356040518b63ffffffff1660e01b815260040161063a999897969594939291906119ed565b5f604051808303818588803b158015610651575f5ffd5b505af1158015610663573d5f5f3e3d5ffd5b5050505050610776565b6106a082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610981565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e00151865f016020810190610702919061193b565b6107126040890160208a01611962565b61071f60408a018a611985565b8a606001356040518a63ffffffff1660e01b8152600401610748999897969594939291906119ed565b5f604051808303815f87803b15801561075f575f5ffd5b505af1158015610771573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107a59190611af2565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166107db576107d682826109ad565b505050565b6107d6838383610a1a565b5f82808203610821576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561082f600185611903565b81811061083e5761083e611c05565b90506020028101906108509190611c32565b610861906080810190606001611c6e565b90505f61086d82610a88565b905073ffffffffffffffffffffffffffffffffffffffff8216610897576108943482611903565b90505b5f6108a28888610ad2565b90506108ae8888610bdc565b6108bb8a89898985610c48565b5f826108c685610a88565b6108d09190611903565b90508981101561091b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661097457637939f4245f526004601cfd5b5f60605260405250505050565b6107d68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ff3565b73ffffffffffffffffffffffffffffffffffffffff82166109fa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff831682611120565b73ffffffffffffffffffffffffffffffffffffffff8216610a67576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d673ffffffffffffffffffffffffffffffffffffffff84168383611139565b5f73ffffffffffffffffffffffffffffffffffffffff821615610aca57610ac573ffffffffffffffffffffffffffffffffffffffff831630611182565b610acc565b475b92915050565b6060815f8167ffffffffffffffff811115610aef57610aef6115a3565b604051908082528060200260200182016040528015610b18578160200160208202803683370190505b5090505f805b83811015610bd157868682818110610b3857610b38611c05565b9050602002810190610b4a9190611c32565b610b5b906080810190606001611c6e565b9150610b6682610a88565b838281518110610b7857610b78611c05565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bc95734838281518110610bb157610bb1611c05565b60200260200101818151610bc59190611903565b9052505b600101610b1e565b509095945050505050565b5f5b818110156107d65736838383818110610bf957610bf9611c05565b9050602002810190610c0b9190611c32565b9050610c1d60e0820160c08301611c87565b15610c3f57610c3f610c356060830160408401611c6e565b82608001356104a1565b50600101610bde565b838383838260018114610f0f575f8585610c63600185611903565b818110610c7257610c72611c05565b9050602002810190610c849190611c32565b610c95906080810190606001611c6e565b90505f89815b81811015610e3c57368d8d83818110610cb657610cb6611c05565b9050602002810190610cc89190611c32565b9050610cf7610cdd6060830160408401611c6e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d595750610d59610d106040830160208401611c6e565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604090205460ff1690565b8015610d705750610d70610d106020830183611c6e565b8015610df35750610df3610d8760a0830183611985565b610d95916004915f91611ca0565b610d9e91611cc7565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea69602052604090205460ff1690565b610e29576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e338f826111b5565b50600101610c9b565b505f90505b610e4c600185611903565b811015610f07575f888883818110610e6657610e66611c05565b9050602002810190610e789190611c32565b610e89906080810190606001611c6e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610efe57858281518110610ed057610ed0611c05565b6020026020010151610ee182610a88565b610eeb9190611903565b92508215610efe57610efe8188856107b1565b50600101610e41565b505050610fe7565b875f5b81811015610fe457368b8b83818110610f2d57610f2d611c05565b9050602002810190610f3f9190611c32565b9050610f54610cdd6060830160408401611c6e565b80610f6d5750610f6d610d106040830160208401611c6e565b8015610f845750610f84610d106020830183611c6e565b8015610f9b5750610f9b610d8760a0830183611985565b610fd1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fdb8d826111b5565b50600101610f12565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561111a5773ffffffffffffffffffffffffffffffffffffffff831661105c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156110cf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110f39190611d2d565b101561111a5761111a73ffffffffffffffffffffffffffffffffffffffff85168483611487565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611179576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111ca6111c56020830183611c6e565b611505565b611200576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361123f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611253610cdd6060850160408601611c6e565b61125d575f611263565b82608001355b90505f61127e6112796060860160408701611c6e565b610a88565b90505f6112946112796080870160608801611c6e565b9050825f036112ca576112ca6112b06060870160408801611c6e565b6112c06040880160208901611c6e565b8760800135610981565b8460800135821015611315576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610912565b5f806113246020880188611c6e565b73ffffffffffffffffffffffffffffffffffffffff168561134860a08a018a611985565b604051611356929190611d44565b5f6040518083038185875af1925050503d805f8114611390576040519150601f19603f3d011682016040523d82523d5f602084013e611395565b606091505b5091509150816113a8576113a881611599565b5f6113bc61127960808a0160608b01611c6e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113ed60208b018b611c6e565b6113fd60608c0160408d01611c6e565b61140d60808d0160608e01611c6e565b8c6080013589871161141f5786611429565b6114298a88611903565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611179575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661117957633e3f8f735f526004601cfd5b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161159057506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115f4576115f46115a3565b60405290565b5f82601f830112611609575f5ffd5b813567ffffffffffffffff811115611623576116236115a3565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611670576116706115a3565b604052818152838201602001851015611687575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116c6575f5ffd5b919050565b803580151581146116c6575f5ffd5b5f61014082840312156116eb575f5ffd5b6116f36115d0565b823581529050602082013567ffffffffffffffff811115611712575f5ffd5b61171e848285016115fa565b602083015250604082013567ffffffffffffffff81111561173d575f5ffd5b611749848285016115fa565b60408301525061175b606083016116a3565b606082015261176c608083016116a3565b608082015261177d60a083016116a3565b60a082015260c0828101359082015260e080830135908201526117a361010083016116cb565b6101008201526117b661012083016116cb565b61012082015292915050565b5f608082840312156117d2575f5ffd5b50919050565b5f5f604083850312156117e9575f5ffd5b823567ffffffffffffffff8111156117ff575f5ffd5b61180b858286016116da565b925050602083013567ffffffffffffffff811115611827575f5ffd5b611833858286016117c2565b9150509250929050565b5f5f5f5f60608587031215611850575f5ffd5b843567ffffffffffffffff811115611866575f5ffd5b611872878288016116da565b945050602085013567ffffffffffffffff81111561188e575f5ffd5b8501601f8101871361189e575f5ffd5b803567ffffffffffffffff8111156118b4575f5ffd5b8760208260051b84010111156118c8575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156118eb575f5ffd5b6118f7878288016117c2565b91505092959194509250565b81810381811115610acc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561194b575f5ffd5b81358060070b811461195b575f5ffd5b9392505050565b5f60208284031215611972575f5ffd5b813563ffffffff8116811461195b575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119b8575f5ffd5b83018035915067ffffffffffffffff8211156119d2575f5ffd5b6020019150368190038213156119e6575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8a16815273ffffffffffffffffffffffffffffffffffffffff891660208201528760408201528660608201528560070b608082015263ffffffff851660a082015261010060c08201528261010082015282846101208301375f61012084830101525f6101207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011683010190508260e08301529a9950505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611b19610160840182611aa6565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b548282611aa6565b9150506060840151611b7e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bed61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c64575f5ffd5b9190910192915050565b5f60208284031215611c7e575f5ffd5b61195b826116a3565b5f60208284031215611c97575f5ffd5b61195b826116cb565b5f5f85851115611cae575f5ffd5b83861115611cba575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611d26577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611d3d575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122039290f33e6d8f83f93d34ec02fde0c16254a2c71a9f9144c75819d55b2931da064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcross";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcross";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
