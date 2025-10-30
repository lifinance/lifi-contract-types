import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611e6f380380611e6f83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611db76100b85f395f8181605d015281816108f601526109450152611db75ff3fe608060405260043610610033575f3560e01c806311cb2d7a14610037578063bbbf77d51461004c578063f72fbce2146100a8575b5f5ffd5b61004a610045366004611934565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b63660046119e1565b610348565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611a2d565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896102ba816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f1576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030a8b5f01518c60c001518c8c338d604001356105c3565b60c08c01526103198b8961075d565b5047925050508181111561033b5761033b5f846103368585611a2d565b610a55565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103c3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103d33447611a2d565b9050846103f88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561042f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361046c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104e7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610525576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610548816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059189608001518a60c00151610a8a565b61059b898961075d565b504792505050818111156105b8576105b85f846103368585611a2d565b50505f909155505050565b5f838082036105fe576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661060c600185611a2d565b81811061061b5761061b611a65565b905060200281019061062d9190611a92565b61063e906080810190606001611ace565b90505f61064a82610b3e565b905073ffffffffffffffffffffffffffffffffffffffff8216610674576106713482611a2d565b90505b5f61067f8989610b88565b905061068b8989610c92565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526106c6818b8b85610cfe565b5f836106d186610b3e565b6106db9190611a2d565b905073ffffffffffffffffffffffffffffffffffffffff8516610705576107028882611a2d565b90505b8b81101561074d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036108205780356107e0576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e08201518251604051833581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361088e565b805f01355f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff161461088e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61089f6040830160208401611ace565b73ffffffffffffffffffffffffffffffffffffffff16036108ec576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091f82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610ecc565b608082015160c083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926398242b3f92604086018035938735916109839060208a01611ace565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4015f604051808303818588803b158015610a03575f5ffd5b505af1158015610a15573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610a499190611b3a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610a7f57610a7a8282610ef8565b505050565b610a7a838383610f65565b805f03610ac3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b1c5780341015610b18576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b1873ffffffffffffffffffffffffffffffffffffffff8316333084610fd3565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b8057610b7b73ffffffffffffffffffffffffffffffffffffffff83163061102b565b610b82565b475b92915050565b6060815f8167ffffffffffffffff811115610ba557610ba56116ff565b604051908082528060200260200182016040528015610bce578160200160208202803683370190505b5090505f5f5b83811015610c8757868682818110610bee57610bee611a65565b9050602002810190610c009190611a92565b610c11906080810190606001611ace565b9150610c1c82610b3e565b838281518110610c2e57610c2e611a65565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c7f5734838281518110610c6757610c67611a65565b60200260200101818151610c7b9190611a2d565b9052505b600101610bd4565b509095945050505050565b5f5b81811015610a7a5736838383818110610caf57610caf611a65565b9050602002810190610cc19190611a92565b9050610cd360e0820160c08301611c4d565b15610cf557610cf5610ceb6060830160408401611ace565b8260800135610a8a565b50600101610c94565b60208401516040850151849184918490835f5b81811015610eb257368a8a83818110610d2c57610d2c611a65565b9050602002810190610d3e9190611a92565b9050610d6d610d536060830160408401611ace565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dce5750610dce610d866040830160208401611ace565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b8015610de55750610de5610d866020830183611ace565b8015610e675750610e67610dfc60a0830183611c66565b610e0a916004915f91611cce565b610e1391611cf5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b610e9d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b51610ea9908261105e565b50600101610d11565b5050610ec185858585856112d1565b505050505050505050565b610a7a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6114e8565b73ffffffffffffffffffffffffffffffffffffffff8216610f45576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1873ffffffffffffffffffffffffffffffffffffffff831682611615565b73ffffffffffffffffffffffffffffffffffffffff8216610fb2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7a73ffffffffffffffffffffffffffffffffffffffff8416838361162e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661101e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61107661106e6020830183611ace565b6017903b1190565b6110ac576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036110eb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6110ff610d536060850160408601611ace565b611109575f61110f565b82608001355b90505f61112a6111256080860160608701611ace565b610b3e565b9050815f03611160576111606111466060860160408701611ace565b6111566040870160208801611ace565b8660800135610ecc565b5f8061116f6020870187611ace565b73ffffffffffffffffffffffffffffffffffffffff168461119360a0890189611c66565b6040516111a1929190611d5b565b5f6040518083038185875af1925050503d805f81146111db576040519150601f19603f3d011682016040523d82523d5f602084013e6111e0565b606091505b5091509150816111f3576111f381611677565b5f6112076111256080890160608a01611ace565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861123860208a018a611ace565b61124860608b0160408c01611ace565b61125860808c0160608d01611ace565b8b6080013589871161126a5786611274565b6112748a88611a2d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826112e0600182611a2d565b8181106112ef576112ef611a65565b90506020028101906113019190611a92565b611312906080810190606001611ace565b90505f5f5f5f5f5f5f5b888110156114d85761132f60018a611a2d565b8110801561133e575088600114155b15611419578d8d8281811061135557611355611a65565b90506020028101906113679190611a92565b611378906080810190606001611ace565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611419578a81815181106113bf576113bf611a65565b60200260200101516113d087610b3e565b6113da9190611a2d565b965073ffffffffffffffffffffffffffffffffffffffff8616156113fe575f611400565b895b93508387111561141957611419868d610336878b611a2d565b8d8d8281811061142b5761142b611a65565b905060200281019061143d9190611a92565b61144e906060810190604001611ace565b945061145985610b3e565b925073ffffffffffffffffffffffffffffffffffffffff85161561147d575f61147f565b895b915081831180156114bc57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156114d0576114d0858d6103368587611a2d565b60010161131c565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561160f5773ffffffffffffffffffffffffffffffffffffffff8316611551576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156115c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115e89190611d6a565b101561160f5761160f73ffffffffffffffffffffffffffffffffffffffff85168483611681565b50505050565b5f385f3884865af1610b185763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661166e576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661166e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661166e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611750576117506116ff565b60405290565b5f82601f830112611765575f5ffd5b813567ffffffffffffffff81111561177f5761177f6116ff565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156117cc576117cc6116ff565b6040528181528382016020018510156117e3575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611822575f5ffd5b919050565b80358015158114611822575f5ffd5b5f6101408284031215611847575f5ffd5b61184f61172c565b823581529050602082013567ffffffffffffffff81111561186e575f5ffd5b61187a84828501611756565b602083015250604082013567ffffffffffffffff811115611899575f5ffd5b6118a584828501611756565b6040830152506118b7606083016117ff565b60608201526118c8608083016117ff565b60808201526118d960a083016117ff565b60a082015260c0828101359082015260e080830135908201526118ff6101008301611827565b6101008201526119126101208301611827565b61012082015292915050565b5f6060828403121561192e575f5ffd5b50919050565b5f5f5f5f60a08587031215611947575f5ffd5b843567ffffffffffffffff81111561195d575f5ffd5b61196987828801611836565b945050602085013567ffffffffffffffff811115611985575f5ffd5b8501601f81018713611995575f5ffd5b803567ffffffffffffffff8111156119ab575f5ffd5b8760208260051b84010111156119bf575f5ffd5b602091909101935091506119d6866040870161191e565b905092959194509250565b5f5f608083850312156119f2575f5ffd5b823567ffffffffffffffff811115611a08575f5ffd5b611a1485828601611836565b925050611a24846020850161191e565b90509250929050565b81810381811115610b82577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ac4575f5ffd5b9190910192915050565b5f60208284031215611ade575f5ffd5b611ae7826117ff565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611b61610160840182611aee565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b9c8282611aee565b9150506060840151611bc6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611c3561012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611c5d575f5ffd5b611ae782611827565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c99575f5ffd5b83018035915067ffffffffffffffff821115611cb3575f5ffd5b602001915036819003821315611cc7575f5ffd5b9250929050565b5f5f85851115611cdc575f5ffd5b83861115611ce8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611d54577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611d7a575f5ffd5b505191905056fea2646970667358221220fd9e1352e82600f98eece35aea843dd9ba066e8c80d056d72dba0221cfc85f0364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "AIRLIFT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
