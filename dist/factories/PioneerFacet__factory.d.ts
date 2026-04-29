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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611d26380380611d26833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c7c6100aa5f395f8181604801526106e70152611c7c5ff3fe608060405260043610610033575f3560e01c80631a7c5c4b146100375780637d09055814610093578063c02fc302146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a13660046117da565b6100bb565b005b6100a66100b6366004611887565b6102e8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476118d3565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610508565b60c08b01526102ba8a8861064a565b5047915050818111156102db576102db5f846102d685856118d3565b61079a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610363576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61037334476118d3565b9050846103988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610449576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610487576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d788608001518960c001516107cf565b6104e1888861064a565b5047915050818111156104fd576104fd5f846102d685856118d3565b50505f909155505050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105516001856118d3565b8181106105605761056061190b565b90506020028101906105729190611938565b610583906080810190606001611974565b90505f61058f82610883565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b634826118d3565b90505b5f6105c488886108cd565b90506105d088886109d7565b6105dd8a89898985610a43565b5f826105e885610883565b6105f291906118d3565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8151610682576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106906020830183611974565b73ffffffffffffffffffffffffffffffffffffffff16036106dd576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071082608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161079a565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161073f91906119e2565b60405180910390a16107546020820182611974565b73ffffffffffffffffffffffffffffffffffffffff167fb267693984b7ccdaff7711e6d5b83ad1bb6a998951e2d1a91e6f83855aa0318f60405160405180910390a25050565b73ffffffffffffffffffffffffffffffffffffffff83166107c4576107bf8282610c8b565b505050565b6107bf838383610cf8565b805f03610808576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610861578034101561085d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61085d73ffffffffffffffffffffffffffffffffffffffff8316333084610e43565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108c5576108c073ffffffffffffffffffffffffffffffffffffffff831630610e9b565b6108c7565b475b92915050565b6060815f8167ffffffffffffffff8111156108ea576108ea611590565b604051908082528060200260200182016040528015610913578160200160208202803683370190505b5090505f5f5b838110156109cc578686828181106109335761093361190b565b90506020028101906109459190611938565b610956906080810190606001611974565b915061096182610883565b8382815181106109735761097361190b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109c457348382815181106109ac576109ac61190b565b602002602001018181516109c091906118d3565b9052505b600101610919565b509095945050505050565b5f5b818110156107bf57368383838181106109f4576109f461190b565b9050602002810190610a069190611938565b9050610a1860e0820160c08301611af5565b15610a3a57610a3a610a306060830160408401611974565b82608001356107cf565b506001016109d9565b83838383825f80805b83811015610c6f57368c8c83818110610a6757610a6761190b565b9050602002810190610a799190611938565b9050610a886020820182611974565b9350610a9a6040820160208301611974565b9250610b3d84610aad60a0840184611b10565b610abb916004915f91611b78565b610ac491611b9f565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610c255750610b71610b576060830160408401611974565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610baa57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610c25575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610c5c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c668e82610ece565b50600101610a4c565b50505050610c80848484845f611141565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cd8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085d73ffffffffffffffffffffffffffffffffffffffff831682611358565b73ffffffffffffffffffffffffffffffffffffffff8216610d45576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610d81575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610e22576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610df8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e1c9190611c05565b50505050565b6107bf73ffffffffffffffffffffffffffffffffffffffff84168383611371565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e8e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610ee6610ede6020830183611974565b6017903b1190565b610f1c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610f5b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610f6f610b576060850160408601611974565b610f79575f610f7f565b82608001355b90505f610f9a610f956080860160608701611974565b610883565b9050815f03610fd057610fd0610fb66060860160408701611974565b610fc66040870160208801611974565b86608001356113ba565b5f80610fdf6020870187611974565b73ffffffffffffffffffffffffffffffffffffffff168461100360a0890189611b10565b604051611011929190611c20565b5f6040518083038185875af1925050503d805f811461104b576040519150601f19603f3d011682016040523d82523d5f602084013e611050565b606091505b50915091508161106357611063816113e6565b5f611077610f956080890160608a01611974565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886110a860208a018a611974565b6110b860608b0160408c01611974565b6110c860808c0160608d01611974565b8b608001358987116110da57866110e4565b6110e48a886118d3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826111506001826118d3565b81811061115f5761115f61190b565b90506020028101906111719190611938565b611182906080810190606001611974565b90505f5f5f5f5f5f5f5b888110156113485761119f60018a6118d3565b811080156111ae575088600114155b15611289578d8d828181106111c5576111c561190b565b90506020028101906111d79190611938565b6111e8906080810190606001611974565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611289578a818151811061122f5761122f61190b565b602002602001015161124087610883565b61124a91906118d3565b965073ffffffffffffffffffffffffffffffffffffffff86161561126e575f611270565b895b93508387111561128957611289868d6102d6878b6118d3565b8d8d8281811061129b5761129b61190b565b90506020028101906112ad9190611938565b6112be906060810190604001611974565b94506112c985610883565b925073ffffffffffffffffffffffffffffffffffffffff8516156112ed575f6112ef565b895b9150818311801561132c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561134057611340858d6102d685876118d3565b60010161118c565b5050505050505050505050505050565b5f385f3884865af161085d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166113b1576390b8ec185f526004601cfd5b5f603452505050565b6107bf8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113f0565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610e1c5773ffffffffffffffffffffffffffffffffffffffff8316611459576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156114cc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114f09190611c2f565b1015610e1c57610e1c73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166113b1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166113b157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115e1576115e1611590565b60405290565b5f82601f8301126115f6575f5ffd5b813567ffffffffffffffff81111561161057611610611590565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561165d5761165d611590565b604052818152838201602001851015611674575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146116b1575f5ffd5b50565b80356116bf81611690565b919050565b80151581146116b1575f5ffd5b80356116bf816116c4565b5f61014082840312156116ed575f5ffd5b6116f56115bd565b823581529050602082013567ffffffffffffffff811115611714575f5ffd5b611720848285016115e7565b602083015250604082013567ffffffffffffffff81111561173f575f5ffd5b61174b848285016115e7565b60408301525061175d606083016116b4565b606082015261176e608083016116b4565b608082015261177f60a083016116b4565b60a082015260c0828101359082015260e080830135908201526117a561010083016116d1565b6101008201526117b861012083016116d1565b61012082015292915050565b5f602082840312156117d4575f5ffd5b50919050565b5f5f5f5f606085870312156117ed575f5ffd5b843567ffffffffffffffff811115611803575f5ffd5b61180f878288016116dc565b945050602085013567ffffffffffffffff81111561182b575f5ffd5b8501601f8101871361183b575f5ffd5b803567ffffffffffffffff811115611851575f5ffd5b8760208260051b8401011115611865575f5ffd5b6020919091019350915061187c86604087016117c4565b905092959194509250565b5f5f60408385031215611898575f5ffd5b823567ffffffffffffffff8111156118ae575f5ffd5b6118ba858286016116dc565b9250506118ca84602085016117c4565b90509250929050565b818103818111156108c7577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261196a575f5ffd5b9190910192915050565b5f60208284031215611984575f5ffd5b813561198f81611690565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a09610160840182611996565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a448282611996565b9150506060840151611a6e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611add61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611b05575f5ffd5b813561198f816116c4565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b43575f5ffd5b83018035915067ffffffffffffffff821115611b5d575f5ffd5b602001915036819003821315611b71575f5ffd5b9250929050565b5f5f85851115611b86575f5ffd5b83861115611b92575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bfe577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c15575f5ffd5b815161198f816116c4565b818382375f9101908152919050565b5f60208284031215611c3f575f5ffd5b505191905056fea264697066735822122003acfc2d8ae9d9d3433a60728ff019ee835b36d86c200d4c06a13b78a4aa4ab164736f6c634300081d0033";
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
