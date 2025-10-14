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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611ba8380380611ba8833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611afe6100aa5f395f8181604801526106e70152611afe5ff3fe608060405260043610610033575f3560e01c80631a7c5c4b146100375780637d09055814610093578063c02fc302146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611679565b6100bb565b005b6100a66100b6366004611726565b6102e8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611772565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610508565b60c08b01526102ba8a8861064a565b5047915050818111156102db576102db5f846102d68585611772565b61079a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610363576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103733447611772565b9050846103988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610449576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610487576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d788608001518960c001516107cf565b6104e1888861064a565b5047915050818111156104fd576104fd5f846102d68585611772565b50505f909155505050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610551600185611772565b818110610560576105606117aa565b905060200281019061057291906117d7565b610583906080810190606001611813565b90505f61058f82610883565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b63482611772565b90505b5f6105c488886108cd565b90506105d088886109d7565b6105dd8a89898985610a43565b5f826105e885610883565b6105f29190611772565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8151610682576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106906020830183611813565b73ffffffffffffffffffffffffffffffffffffffff16036106dd576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071082608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161079a565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161073f9190611881565b60405180910390a16107546020820182611813565b73ffffffffffffffffffffffffffffffffffffffff167fb267693984b7ccdaff7711e6d5b83ad1bb6a998951e2d1a91e6f83855aa0318f60405160405180910390a25050565b73ffffffffffffffffffffffffffffffffffffffff83166107c4576107bf8282610c05565b505050565b6107bf838383610c72565b805f03610808576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610861578034101561085d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61085d73ffffffffffffffffffffffffffffffffffffffff8316333084610ce0565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108c5576108c073ffffffffffffffffffffffffffffffffffffffff831630610d38565b6108c7565b475b92915050565b6060815f8167ffffffffffffffff8111156108ea576108ea611438565b604051908082528060200260200182016040528015610913578160200160208202803683370190505b5090505f5f5b838110156109cc57868682818110610933576109336117aa565b905060200281019061094591906117d7565b610956906080810190606001611813565b915061096182610883565b838281518110610973576109736117aa565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109c457348382815181106109ac576109ac6117aa565b602002602001018181516109c09190611772565b9052505b600101610919565b509095945050505050565b5f5b818110156107bf57368383838181106109f4576109f46117aa565b9050602002810190610a0691906117d7565b9050610a1860e0820160c08301611994565b15610a3a57610a3a610a306060830160408401611813565b82608001356107cf565b506001016109d9565b83838383825f5b81811015610beb57368a8a83818110610a6557610a656117aa565b9050602002810190610a7791906117d7565b9050610aa6610a8c6060830160408401611813565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610b085750610b08610abf6040830160208401611813565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b1f5750610b1f610abf6020830183611813565b8015610ba25750610ba2610b3660a08301836119ad565b610b44916004915f91611a15565b610b4d91611a3c565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610bd8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610be28c82610d6b565b50600101610a4a565b5050610bfa848484845f610fde565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c52576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085d73ffffffffffffffffffffffffffffffffffffffff8316826111f5565b73ffffffffffffffffffffffffffffffffffffffff8216610cbf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107bf73ffffffffffffffffffffffffffffffffffffffff8416838361120e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d2b57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610d83610d7b6020830183611813565b6017903b1190565b610db9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610df8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610e0c610a8c6060850160408601611813565b610e16575f610e1c565b82608001355b90505f610e37610e326080860160608701611813565b610883565b9050815f03610e6d57610e6d610e536060860160408701611813565b610e636040870160208801611813565b8660800135611257565b5f80610e7c6020870187611813565b73ffffffffffffffffffffffffffffffffffffffff1684610ea060a08901896119ad565b604051610eae929190611aa2565b5f6040518083038185875af1925050503d805f8114610ee8576040519150601f19603f3d011682016040523d82523d5f602084013e610eed565b606091505b509150915081610f0057610f0081611283565b5f610f14610e326080890160608a01611813565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610f4560208a018a611813565b610f5560608b0160408c01611813565b610f6560808c0160608d01611813565b8b60800135898711610f775786610f81565b610f818a88611772565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682610fed600182611772565b818110610ffc57610ffc6117aa565b905060200281019061100e91906117d7565b61101f906080810190606001611813565b90505f5f5f5f5f5f5f5b888110156111e55761103c60018a611772565b8110801561104b575088600114155b15611126578d8d82818110611062576110626117aa565b905060200281019061107491906117d7565b611085906080810190606001611813565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611126578a81815181106110cc576110cc6117aa565b60200260200101516110dd87610883565b6110e79190611772565b965073ffffffffffffffffffffffffffffffffffffffff86161561110b575f61110d565b895b93508387111561112657611126868d6102d6878b611772565b8d8d82818110611138576111386117aa565b905060200281019061114a91906117d7565b61115b906060810190604001611813565b945061116685610883565b925073ffffffffffffffffffffffffffffffffffffffff85161561118a575f61118c565b895b915081831180156111c957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156111dd576111dd858d6102d68587611772565b600101611029565b5050505050505050505050505050565b5f385f3884865af161085d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661124e576390b8ec185f526004601cfd5b5f603452505050565b6107bf8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61128d565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156113b45773ffffffffffffffffffffffffffffffffffffffff83166112f6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611369573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061138d9190611ab1565b10156113b4576113b473ffffffffffffffffffffffffffffffffffffffff851684836113ba565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661124e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661124e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561148957611489611438565b60405290565b5f82601f83011261149e575f5ffd5b813567ffffffffffffffff8111156114b8576114b8611438565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561150557611505611438565b60405281815283820160200185101561151c575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611559575f5ffd5b50565b803561156781611538565b919050565b80358015158114611567575f5ffd5b5f610140828403121561158c575f5ffd5b611594611465565b823581529050602082013567ffffffffffffffff8111156115b3575f5ffd5b6115bf8482850161148f565b602083015250604082013567ffffffffffffffff8111156115de575f5ffd5b6115ea8482850161148f565b6040830152506115fc6060830161155c565b606082015261160d6080830161155c565b608082015261161e60a0830161155c565b60a082015260c0828101359082015260e08083013590820152611644610100830161156c565b610100820152611657610120830161156c565b61012082015292915050565b5f60208284031215611673575f5ffd5b50919050565b5f5f5f5f6060858703121561168c575f5ffd5b843567ffffffffffffffff8111156116a2575f5ffd5b6116ae8782880161157b565b945050602085013567ffffffffffffffff8111156116ca575f5ffd5b8501601f810187136116da575f5ffd5b803567ffffffffffffffff8111156116f0575f5ffd5b8760208260051b8401011115611704575f5ffd5b6020919091019350915061171b8660408701611663565b905092959194509250565b5f5f60408385031215611737575f5ffd5b823567ffffffffffffffff81111561174d575f5ffd5b6117598582860161157b565b9250506117698460208501611663565b90509250929050565b818103818111156108c7577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611809575f5ffd5b9190910192915050565b5f60208284031215611823575f5ffd5b813561182e81611538565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526118a8610160840182611835565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526118e38282611835565b915050606084015161190d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161197c61012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156119a4575f5ffd5b61182e8261156c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119e0575f5ffd5b83018035915067ffffffffffffffff8211156119fa575f5ffd5b602001915036819003821315611a0e575f5ffd5b9250929050565b5f5f85851115611a23575f5ffd5b83861115611a2f575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611a9b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611ac1575f5ffd5b505191905056fea2646970667358221220f897c4491eaa6a98149b78c92779f3af4123da487c7c5536da91e5f702116e1664736f6c634300081d0033";
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
