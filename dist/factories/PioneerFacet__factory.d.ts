import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PioneerFacet, PioneerFacetInterface } from "../PioneerFacet";
type PioneerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PioneerFacet__factory extends ContractFactory {
    constructor(...args: PioneerFacetConstructorParams);
    deploy(_pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PioneerFacet>;
    getDeployTransaction(_pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PioneerFacet;
    connect(signer: Signer): PioneerFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611b7a380380611b7a833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611ad06100aa5f395f8181604801526106e70152611ad05ff3fe608060405260043610610033575f3560e01c80631a7c5c4b146100375780637d09055814610093578063c02fc302146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a136600461164b565b6100bb565b005b6100a66100b63660046116f8565b6102e8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611744565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610508565b60c08b01526102ba8a8861064a565b5047915050818111156102db576102db5f846102d68585611744565b61079a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610363576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103733447611744565b9050846103988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610449576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610487576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d788608001518960c001516107cf565b6104e1888861064a565b5047915050818111156104fd576104fd5f846102d68585611744565b50505f909155505050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610551600185611744565b8181106105605761056061177c565b905060200281019061057291906117a9565b6105839060808101906060016117e5565b90505f61058f82610883565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b63482611744565b90505b5f6105c488886108cd565b90506105d088886109d7565b6105dd8a89898985610a43565b5f826105e885610883565b6105f29190611744565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8151610682576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61069060208301836117e5565b73ffffffffffffffffffffffffffffffffffffffff16036106dd576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071082608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161079a565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161073f9190611853565b60405180910390a161075460208201826117e5565b73ffffffffffffffffffffffffffffffffffffffff167fb267693984b7ccdaff7711e6d5b83ad1bb6a998951e2d1a91e6f83855aa0318f60405160405180910390a25050565b73ffffffffffffffffffffffffffffffffffffffff83166107c4576107bf8282610dee565b505050565b6107bf838383610e5b565b805f03610808576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610861578034101561085d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61085d73ffffffffffffffffffffffffffffffffffffffff8316333084610ec9565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108c5576108c073ffffffffffffffffffffffffffffffffffffffff831630610f21565b6108c7565b475b92915050565b6060815f8167ffffffffffffffff8111156108ea576108ea61140a565b604051908082528060200260200182016040528015610913578160200160208202803683370190505b5090505f805b838110156109cc578686828181106109335761093361177c565b905060200281019061094591906117a9565b6109569060808101906060016117e5565b915061096182610883565b8382815181106109735761097361177c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109c457348382815181106109ac576109ac61177c565b602002602001018181516109c09190611744565b9052505b600101610919565b509095945050505050565b5f5b818110156107bf57368383838181106109f4576109f461177c565b9050602002810190610a0691906117a9565b9050610a1860e0820160c08301611966565b15610a3a57610a3a610a3060608301604084016117e5565b82608001356107cf565b506001016109d9565b838383838260018114610d0a575f8585610a5e600185611744565b818110610a6d57610a6d61177c565b9050602002810190610a7f91906117a9565b610a909060808101906060016117e5565b90505f89815b81811015610c3757368d8d83818110610ab157610ab161177c565b9050602002810190610ac391906117a9565b9050610af2610ad860608301604084016117e5565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610b545750610b54610b0b60408301602084016117e5565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b6b5750610b6b610b0b60208301836117e5565b8015610bee5750610bee610b8260a083018361197f565b610b90916004915f916119e7565b610b9991611a0e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c24576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c2e8f82610f54565b50600101610a96565b505f90505b610c47600185611744565b811015610d02575f888883818110610c6157610c6161177c565b9050602002810190610c7391906117a9565b610c849060808101906060016117e5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cf957858281518110610ccb57610ccb61177c565b6020026020010151610cdc82610883565b610ce69190611744565b92508215610cf957610cf981888561079a565b50600101610c3c565b505050610de2565b875f5b81811015610ddf57368b8b83818110610d2857610d2861177c565b9050602002810190610d3a91906117a9565b9050610d4f610ad860608301604084016117e5565b80610d685750610d68610b0b60408301602084016117e5565b8015610d7f5750610d7f610b0b60208301836117e5565b8015610d965750610d96610b8260a083018361197f565b610dcc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dd68d82610f54565b50600101610d0d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e3b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085d73ffffffffffffffffffffffffffffffffffffffff8316826111c7565b73ffffffffffffffffffffffffffffffffffffffff8216610ea8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107bf73ffffffffffffffffffffffffffffffffffffffff841683836111e0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f1457637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610f6c610f6460208301836117e5565b6017903b1190565b610fa2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610fe1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610ff5610ad860608501604086016117e5565b610fff575f611005565b82608001355b90505f61102061101b60808601606087016117e5565b610883565b9050815f036110565761105661103c60608601604087016117e5565b61104c60408701602088016117e5565b8660800135611229565b5f8061106560208701876117e5565b73ffffffffffffffffffffffffffffffffffffffff168461108960a089018961197f565b604051611097929190611a74565b5f6040518083038185875af1925050503d805f81146110d1576040519150601f19603f3d011682016040523d82523d5f602084013e6110d6565b606091505b5091509150816110e9576110e981611255565b5f6110fd61101b6080890160608a016117e5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861112e60208a018a6117e5565b61113e60608b0160408c016117e5565b61114e60808c0160608d016117e5565b8b60800135898711611160578661116a565b61116a8a88611744565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af161085d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611220576390b8ec185f526004601cfd5b5f603452505050565b6107bf8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61125f565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156113865773ffffffffffffffffffffffffffffffffffffffff83166112c8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561133b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061135f9190611a83565b10156113865761138673ffffffffffffffffffffffffffffffffffffffff8516848361138c565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611220575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661122057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561145b5761145b61140a565b60405290565b5f82601f830112611470575f5ffd5b813567ffffffffffffffff81111561148a5761148a61140a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156114d7576114d761140a565b6040528181528382016020018510156114ee575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461152b575f5ffd5b50565b80356115398161150a565b919050565b80358015158114611539575f5ffd5b5f610140828403121561155e575f5ffd5b611566611437565b823581529050602082013567ffffffffffffffff811115611585575f5ffd5b61159184828501611461565b602083015250604082013567ffffffffffffffff8111156115b0575f5ffd5b6115bc84828501611461565b6040830152506115ce6060830161152e565b60608201526115df6080830161152e565b60808201526115f060a0830161152e565b60a082015260c0828101359082015260e08083013590820152611616610100830161153e565b610100820152611629610120830161153e565b61012082015292915050565b5f60208284031215611645575f5ffd5b50919050565b5f5f5f5f6060858703121561165e575f5ffd5b843567ffffffffffffffff811115611674575f5ffd5b6116808782880161154d565b945050602085013567ffffffffffffffff81111561169c575f5ffd5b8501601f810187136116ac575f5ffd5b803567ffffffffffffffff8111156116c2575f5ffd5b8760208260051b84010111156116d6575f5ffd5b602091909101935091506116ed8660408701611635565b905092959194509250565b5f5f60408385031215611709575f5ffd5b823567ffffffffffffffff81111561171f575f5ffd5b61172b8582860161154d565b92505061173b8460208501611635565b90509250929050565b818103818111156108c7577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126117db575f5ffd5b9190910192915050565b5f602082840312156117f5575f5ffd5b81356118008161150a565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261187a610160840182611807565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526118b58282611807565b91505060608401516118df608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161194e61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611976575f5ffd5b6118008261153e565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119b2575f5ffd5b83018035915067ffffffffffffffff8211156119cc575f5ffd5b6020019150368190038213156119e0575f5ffd5b9250929050565b5f5f858511156119f5575f5ffd5b83861115611a01575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611a6d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611a93575f5ffd5b505191905056fea26469706673582212205daf31c5661740c94c851a6ad13ad5a43c1d433a071d14e2d2c6e4ed4afcd0d264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_pioneerAddress";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PIONEER_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPioneer";
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
            readonly name: "_pioneerData";
            readonly type: "tuple";
            readonly internalType: "struct PioneerFacet.PioneerData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPioneer";
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
            readonly name: "_pioneerData";
            readonly type: "tuple";
            readonly internalType: "struct PioneerFacet.PioneerData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
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
        readonly type: "event";
        readonly name: "PioneerRefundAddressRegistered";
        readonly inputs: readonly [{
            readonly name: "refundTo";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
    static createInterface(): PioneerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PioneerFacet;
}
export {};
