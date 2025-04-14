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
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b506040516200274a3803806200274a833981016040819052620000339162000063565b6001600160a01b039182166080521660a052620000a0565b6001600160a01b038116811462000060575f80fd5b50565b5f806040838503121562000075575f80fd5b825162000082816200004b565b602084015190925062000095816200004b565b809150509250929050565b60805160a05161267a620000d05f395f61068d01525f81816106620152818161073f015261076a015261267a5ff3fe608060405260043610610028575f3560e01c80631fd8010c1461002c5780633a3f733214610041575b5f80fd5b61003f61003a3660046120b4565b610054565b005b61003f61004f366004612114565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476121ca565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d888861061d565b50479150508181111561026e5761026e5f8461026985856121ca565b610879565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030434476121ca565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b336108aa565b60c08b01526104788a8861061d565b504791505081811115610494576104945f8461026985856121ca565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561059d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105c19190612202565b90508181101561060c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610618833330856109e8565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166107355760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906106bc6020890189612219565b6106cc60408a0160208b01612240565b6106d960408b018b612263565b8b606001356040518b63ffffffff1660e01b8152600401610702999897969594939291906122cb565b5f604051808303818588803b158015610719575f80fd5b505af115801561072b573d5f803e3d5ffd5b505050505061083e565b61076882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bfd565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e00151865f0160208101906107ca9190612219565b6107da6040890160208a01612240565b6107e760408a018a612263565b8a606001356040518a63ffffffff1660e01b8152600401610810999897969594939291906122cb565b5f604051808303815f87803b158015610827575f80fd5b505af1158015610839573d5f803e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086d91906123d9565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a057610618838383610d32565b6106188282610eb1565b5f828082036108e5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108f36001856121ca565b818110610902576109026124eb565b90506020028101906109149190612518565b610925906080810190606001612554565b90505f61093182610fd7565b905073ffffffffffffffffffffffffffffffffffffffff821661095b5761095834826121ca565b90505b5f610966888861108d565b90506109728888611197565b61097f8a89898985611203565b5f8261098a85610fd7565b61099491906121ca565b9050898110156109da576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610603565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a35576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a82576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610af0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b149190612202565b9050610b22828686866115ad565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b90573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb49190612202565b610bbe91906121ca565b14610bf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c1d57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c6a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610cdd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d019190612202565b10156106185761061883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611689565b73ffffffffffffffffffffffffffffffffffffffff8316610d7f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dcc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e36573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e5a9190612202565b905080821115610ea0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610603565b610eab848484611778565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610efe576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f41576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610603565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610f97576040519150601f19603f3d011682016040523d82523d5f602084013e610f9c565b606091505b5050905080610618576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615611085576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561105c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110809190612202565b611087565b475b92915050565b6060815f8167ffffffffffffffff8111156110aa576110aa611e7c565b6040519080825280602002602001820160405280156110d3578160200160208202803683370190505b5090505f805b8381101561118c578686828181106110f3576110f36124eb565b90506020028101906111059190612518565b611116906080810190606001612554565b915061112182610fd7565b838281518110611133576111336124eb565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611184573483828151811061116c5761116c6124eb565b6020026020010181815161118091906121ca565b9052505b6001016110d9565b509095945050505050565b5f5b8181101561061857368383838181106111b4576111b46124eb565b90506020028101906111c69190612518565b90506111d860e0820160c0830161256d565b156111fa576111fa6111f06060830160408401612554565b82608001356104a1565b50600101611199565b8383838382600181146114c9575f858561121e6001856121ca565b81811061122d5761122d6124eb565b905060200281019061123f9190612518565b611250906080810190606001612554565b90505f89815b818110156113f757368d8d83818110611271576112716124eb565b90506020028101906112839190612518565b90506112b26112986060830160408401612554565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061131457506113146112cb6040830160208401612554565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561132b575061132b6112cb6020830183612554565b80156113ae57506113ae61134260a0830183612263565b611350916004915f91612588565b611359916125af565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113e4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113ee8f826117ce565b50600101611256565b50505f5b6114066001856121ca565b8110156114c1575f888883818110611420576114206124eb565b90506020028101906114329190612518565b611443906080810190606001612554565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114b85785828151811061148a5761148a6124eb565b602002602001015161149b82610fd7565b6114a591906121ca565b925082156114b8576114b8818885610879565b506001016113fb565b5050506115a1565b875f5b8181101561159e57368b8b838181106114e7576114e76124eb565b90506020028101906114f99190612518565b905061150e6112986060830160408401612554565b8061152757506115276112cb6040830160208401612554565b801561153e575061153e6112cb6020830183612554565b8015611555575061155561134260a0830183612263565b61158b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115958d826117ce565b506001016114cc565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610eab9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aa1565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117158482611bae565b610eab5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f604482015261176e9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611607565b610eab8482611aa1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106189084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611607565b6117e46117de6020830183612554565b3b151590565b61181a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611859576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61186d6112986060850160408601612554565b611877575f61187d565b82608001355b90505f6118986118936060860160408701612554565b610fd7565b90505f6118ae6118936080870160608801612554565b9050825f036118e4576118e46118ca6060870160408801612554565b6118da6040880160208901612554565b8760800135610bfd565b846080013582101561192f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610603565b5f8061193e6020880188612554565b73ffffffffffffffffffffffffffffffffffffffff168561196260a08a018a612263565b6040516119709291906125f7565b5f6040518083038185875af1925050503d805f81146119aa576040519150601f19603f3d011682016040523d82523d5f602084013e6119af565b606091505b5091509150816119c2576119c281611c69565b5f6119d661189360808a0160608b01612554565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a0760208b018b612554565b611a1760608c0160408d01612554565b611a2760808d0160608e01612554565b8c60800135898711611a395786611a43565b611a438a886121ca565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f611b02826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c739092919063ffffffff16565b905080515f1480611b22575080806020019051810190611b229190612606565b610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610603565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611bd69190612621565b5f604051808303815f865af19150503d805f8114611c0f576040519150601f19603f3d011682016040523d82523d5f602084013e611c14565b606091505b5091509150818015611c3e575080511580611c3e575080806020019051810190611c3e9190612606565b8015611c60575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611c8184845f85611c89565b949350505050565b606082471015611d1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610603565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611d439190612621565b5f6040518083038185875af1925050503d805f8114611d7d576040519150601f19603f3d011682016040523d82523d5f602084013e611d82565b606091505b5091509150611d9387838387611d9e565b979650505050505050565b60608315611e335782515f03611e2c5773ffffffffffffffffffffffffffffffffffffffff85163b611e2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610603565b5081611c81565b611c818383815115611e485781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106039190612632565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ecd57611ecd611e7c565b60405290565b5f82601f830112611ee2575f80fd5b813567ffffffffffffffff80821115611efd57611efd611e7c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f4357611f43611e7c565b81604052838152866020858801011115611f5b575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f9d575f80fd5b919050565b8015158114611faf575f80fd5b50565b8035611f9d81611fa2565b5f6101408284031215611fce575f80fd5b611fd6611ea9565b905081358152602082013567ffffffffffffffff80821115611ff6575f80fd5b61200285838601611ed3565b6020840152604084013591508082111561201a575f80fd5b5061202784828501611ed3565b60408301525061203960608301611f7a565b606082015261204a60808301611f7a565b608082015261205b60a08301611f7a565b60a082015260c082013560c082015260e082013560e0820152610100612082818401611fb2565b90820152610120612094838201611fb2565b9082015292915050565b5f608082840312156120ae575f80fd5b50919050565b5f80604083850312156120c5575f80fd5b823567ffffffffffffffff808211156120dc575f80fd5b6120e886838701611fbd565b935060208501359150808211156120fd575f80fd5b5061210a8582860161209e565b9150509250929050565b5f805f8060608587031215612127575f80fd5b843567ffffffffffffffff8082111561213e575f80fd5b61214a88838901611fbd565b9550602087013591508082111561215f575f80fd5b818701915087601f830112612172575f80fd5b813581811115612180575f80fd5b8860208260051b8501011115612194575f80fd5b6020830195508094505060408701359150808211156121b1575f80fd5b506121be8782880161209e565b91505092959194509250565b81810381811115611087577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612212575f80fd5b5051919050565b5f60208284031215612229575f80fd5b81358060070b8114612239575f80fd5b9392505050565b5f60208284031215612250575f80fd5b813563ffffffff81168114612239575f80fd5b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612296575f80fd5b83018035915067ffffffffffffffff8211156122b0575f80fd5b6020019150368190038213156122c4575f80fd5b9250929050565b5f61010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c08401528481840152506101208486828501375f83860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b5f5b83811015612388578181015183820152602001612370565b50505f910152565b5f81518084526123a781602086016020860161236e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f6020830151610140806040850152612401610160850183612390565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261243c8382612390565b9250506060850151612466608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124d98187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261254a575f80fd5b9190910192915050565b5f60208284031215612564575f80fd5b61223982611f7a565b5f6020828403121561257d575f80fd5b813561223981611fa2565b5f8085851115612596575f80fd5b838611156125a2575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125ef5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f60208284031215612616575f80fd5b815161223981611fa2565b5f825161254a81846020870161236e565b602081525f612239602083018461239056fea2646970667358221220eaeb935286beddf67b400043fbd73dbdc176df91902581519aa9cc77e43d465864736f6c63430008160033";
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
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
