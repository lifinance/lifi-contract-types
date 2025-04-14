import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161298738038061298783398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a0516128ce6100b95f395f6106a201525f818161081b015261089201526128ce5ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f5ffd5b61003f61003a3660046122da565b610054565b005b61003f61004f366004612387565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447612400565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135612413565b61024e90893561242a565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610681565b50479250505081811115610297576102975f846102928585612400565b6109d9565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f3447612400565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135612413565b61049f90893561242a565b90506104b389608001518a60c00151610a0f565b6104be898983610681565b504792505050818111156104db576104db5f846102928585612400565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f600185612400565b81811061053e5761053e61243d565b9050602002810190610550919061246a565b6105619060808101906060016124a6565b90505f61056d82610b81565b905073ffffffffffffffffffffffffffffffffffffffff8216610597576105943482612400565b90505b5f6105a28989610c37565b90506105ae8989610d41565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610dad565b5f836105f486610b81565b6105fe9190612400565b905073ffffffffffffffffffffffffffffffffffffffff8516610628576106258882612400565b90505b8b811015610671576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cc577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106ec919061242a565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a1573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c691906124c8565b5061099d565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261089092917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610862573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061088691906124df565b8560c00151611195565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f013560405160200161090a9181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093a96959493929190612546565b5f6040518083038185885af1158015610955573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099b91908101906125ae565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cc9190612623565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a0557610a008383836112ca565b505050565b610a008282611449565b805f03610a48576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa15780341015610a9d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b0b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b2f91906124c8565b905081811015610b75576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610668565b610a008333308561156f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c2f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c06573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c2a91906124c8565b610c31565b475b92915050565b6060815f8167ffffffffffffffff811115610c5457610c54612053565b604051908082528060200260200182016040528015610c7d578160200160208202803683370190505b5090505f805b83811015610d3657868682818110610c9d57610c9d61243d565b9050602002810190610caf919061246a565b610cc09060808101906060016124a6565b9150610ccb82610b81565b838281518110610cdd57610cdd61243d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d2e5734838281518110610d1657610d1661243d565b60200260200101818151610d2a9190612400565b9052505b600101610c83565b509095945050505050565b5f5b81811015610a005736838383818110610d5e57610d5e61243d565b9050602002810190610d70919061246a565b9050610d8260e0820160c08301612736565b15610da457610da4610d9a60608301604084016124a6565b8260800135610a0f565b50600101610d43565b6020840151604085015184918491849083600181146110af575f8686610dd4600185612400565b818110610de357610de361243d565b9050602002810190610df5919061246a565b610e069060808101906060016124a6565b90505f89815b81811015610faf57368d8d83818110610e2757610e2761243d565b9050602002810190610e39919061246a565b9050610e68610e4e60608301604084016124a6565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eca5750610eca610e8160408301602084016124a6565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ee15750610ee1610e8160208301836124a6565b8015610f645750610f64610ef860a0830183612751565b610f06916004915f916127b9565b610f0f916127e0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f9a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610fa69082611784565b50600101610e0c565b505f90505b610fbf600185612400565b8110156110a7575f898983818110610fd957610fd961243d565b9050602002810190610feb919061246a565b610ffc9060808101906060016124a6565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461109e578682815181106110435761104361243d565b602002602001015161105482610b81565b61105e9190612400565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611083575f611085565b865b9050831561109c5761109c828a6102928488612400565b505b50600101610fb4565b505050611189565b875f5b8181101561118657368b8b838181106110cd576110cd61243d565b90506020028101906110df919061246a565b90506110f4610e4e60608301604084016124a6565b8061110d575061110d610e8160408301602084016124a6565b80156111245750611124610e8160208301836124a6565b801561113b575061113b610ef860a0830183612751565b611171576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161117d9082611784565b506001016110b2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111b557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611202576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611275573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061129991906124c8565b1015610a0057610a0083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a57565b73ffffffffffffffffffffffffffffffffffffffff8316611317576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611364576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113ce573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f291906124c8565b905080821115611438576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610668565b611443848484611bc4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611496576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114d9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610668565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461152f576040519150601f19603f3d011682016040523d82523d5f602084013e611534565b606091505b5050905080610a00576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115bc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611609576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611677573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061169b91906124c8565b90506116a982868686611c1a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611717573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061173b91906124c8565b6117459190612400565b1461177c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61179a61179460208301836124a6565b3b151590565b6117d0576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361180f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611823610e4e60608501604086016124a6565b61182d575f611833565b82608001355b90505f61184e61184960608601604087016124a6565b610b81565b90505f61186461184960808701606088016124a6565b9050825f0361189a5761189a61188060608701604088016124a6565b61189060408801602089016124a6565b8760800135611195565b84608001358210156118e5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610668565b5f806118f460208801886124a6565b73ffffffffffffffffffffffffffffffffffffffff168561191860a08a018a612751565b604051611926929190612846565b5f6040518083038185875af1925050503d805f8114611960576040519150601f19603f3d011682016040523d82523d5f602084013e611965565b606091505b5091509150816119785761197881611c78565b5f61198c61184960808a0160608b016124a6565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119bd60208b018b6124a6565b6119cd60608c0160408d016124a6565b6119dd60808d0160608e016124a6565b8c608001358987116119ef57866119f9565b6119f98a88612400565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ae38482611c82565b6114435760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611bba9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d3d565b6114438482611d3d565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a009084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b38565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114439085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b38565b8051602082018181fd5b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611caa9190612855565b5f604051808303815f865af19150503d805f8114611ce3576040519150601f19603f3d011682016040523d82523d5f602084013e611ce8565b606091505b5091509150818015611d12575080511580611d12575080806020019051810190611d12919061286b565b8015611d34575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611d9e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e4a9092919063ffffffff16565b905080515f1480611dbe575080806020019051810190611dbe919061286b565b610a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610668565b6060611e5884845f85611e60565b949350505050565b606082471015611ef2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610668565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611f1a9190612855565b5f6040518083038185875af1925050503d805f8114611f54576040519150601f19603f3d011682016040523d82523d5f602084013e611f59565b606091505b5091509150611f6a87838387611f75565b979650505050505050565b6060831561200a5782515f036120035773ffffffffffffffffffffffffffffffffffffffff85163b612003576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610668565b5081611e58565b611e58838381511561201f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106689190612886565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156120a4576120a4612053565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f1576120f1612053565b604052919050565b5f67ffffffffffffffff82111561211257612112612053565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f83011261214d575f5ffd5b813561216061215b826120f9565b6120aa565b818152846020838601011115612174575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146121b1575f5ffd5b50565b80356121bf81612190565b919050565b80151581146121b1575f5ffd5b80356121bf816121c4565b5f61014082840312156121ed575f5ffd5b6121f5612080565b823581529050602082013567ffffffffffffffff811115612214575f5ffd5b6122208482850161213e565b602083015250604082013567ffffffffffffffff81111561223f575f5ffd5b61224b8482850161213e565b60408301525061225d606083016121b4565b606082015261226e608083016121b4565b608082015261227f60a083016121b4565b60a082015260c0828101359082015260e080830135908201526122a561010083016121d1565b6101008201526122b861012083016121d1565b61012082015292915050565b5f606082840312156122d4575f5ffd5b50919050565b5f5f5f5f60a085870312156122ed575f5ffd5b843567ffffffffffffffff811115612303575f5ffd5b61230f878288016121dc565b945050602085013567ffffffffffffffff81111561232b575f5ffd5b8501601f8101871361233b575f5ffd5b803567ffffffffffffffff811115612351575f5ffd5b8760208260051b8401011115612365575f5ffd5b6020919091019350915061237c86604087016122c4565b905092959194509250565b5f5f60808385031215612398575f5ffd5b823567ffffffffffffffff8111156123ae575f5ffd5b6123ba858286016121dc565b9250506123ca84602085016122c4565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c3157610c316123d3565b8082028115828204841417610c3157610c316123d3565b80820180821115610c3157610c316123d3565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261249c575f5ffd5b9190910192915050565b5f602082840312156124b6575f5ffd5b81356124c181612190565b9392505050565b5f602082840312156124d8575f5ffd5b5051919050565b5f602082840312156124ef575f5ffd5b81516124c181612190565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015283606082015282608082015260c060a08201525f6125a260c08301846124fa565b98975050505050505050565b5f602082840312156125be575f5ffd5b815167ffffffffffffffff8111156125d4575f5ffd5b8201601f810184136125e4575f5ffd5b80516125f261215b826120f9565b818152856020838501011115612606575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b60208152815160208201525f6020830151610140604084015261264a6101608401826124fa565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261268582826124fa565b91505060608401516126af608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161271e61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612746575f5ffd5b81356124c1816121c4565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612784575f5ffd5b83018035915067ffffffffffffffff82111561279e575f5ffd5b6020019150368190038213156127b2575f5ffd5b9250929050565b5f5f858511156127c7575f5ffd5b838611156127d3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561283f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f6020828403121561287b575f5ffd5b81516124c1816121c4565b602081525f6124c160208301846124fa56fea2646970667358221220e2306c6302a6bf4dea9f42699034d7e001a656a980f5535a2032302ac813982e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
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
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
