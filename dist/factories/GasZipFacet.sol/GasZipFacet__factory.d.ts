import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZipFacet, GasZipFacetInterface } from "../../GasZipFacet.sol/GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027ea380380620027ea833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612749620000a16000396000818160cc0152818161044201526104f501526127496000f3fe60806040526004361061005a5760003560e01c8063867372e411610043578063867372e414610094578063b78e6e40146100a7578063ba956b9a146100ba57600080fd5b80633c36bac11461005f5780633d86ea8714610074575b600080fd5b61007261006d3660046121e0565b610117565b005b34801561008057600080fd5b5061007261008f36600461228c565b6103db565b6100726100a23660046122e8565b6104a9565b6100726100b5366004612314565b610558565b3480156100c657600080fd5b506100ee7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610192576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101a33447612363565b9050868061010001516101e2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610220576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102438160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561027a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102b8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102f5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808a015173ffffffffffffffffffffffffffffffffffffffff16610346576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035b8a600001518b60c001518b8b33610800565b60c08b0181905260a08b015161037491908935906104a9565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18a6040516103a3919061240b565b60405180910390a15047915050818111156103cd576103cd6000846103c88585612363565b610948565b505060009091555050505050565b476103e760008561097e565b60006103f38247612363565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff85811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b15801561048957600080fd5b505af115801561049d573d6000803e3d6000fd5b50505050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561053a57600080fd5b505af115801561054e573d6000803e3d6000fd5b5050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105d3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105e43447612363565b9050846106098160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610640576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361067e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106bb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156106f9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610737576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff1615610789576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a08860c0015188600001358a60a001516104a9565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1886040516107cf919061240b565b60405180910390a15047915050818111156107f4576107f46000846103c88585612363565b50506000909155505050565b60008280820361083c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561084b600185612363565b81811061085a5761085a61251e565b905060200281019061086c919061254d565b61087d90608081019060600161258b565b9050600061088a82610c76565b905073ffffffffffffffffffffffffffffffffffffffff82166108b4576108b13482612363565b90505b60006108c08888610d2f565b90506108cc8888610e3b565b6108d98a89898985610ea8565b6000826108e585610c76565b6108ef9190612363565b90508981101561093a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156109745761096f83838361123f565b505050565b61096f82826113c1565b61099461098e602083018361258b565b3b151590565b6109ca576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610a0a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a39610a1f606085016040860161258b565b73ffffffffffffffffffffffffffffffffffffffff161590565b610a44576000610a4a565b82608001355b90506000610a66610a61606086016040870161258b565b610c76565b90506000610a7d610a61608087016060880161258b565b905082600003610ab457610ab4610a9a606087016040880161258b565b610aaa604088016020890161258b565b87608001356114eb565b8460800135821015610aff576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610931565b600080610b0f602088018861258b565b73ffffffffffffffffffffffffffffffffffffffff1685610b3360a08a018a6125ad565b604051610b41929190612619565b60006040518083038185875af1925050503d8060008114610b7e576040519150601f19603f3d011682016040523d82523d6000602084013e610b83565b606091505b509150915081610b9657610b968161162e565b6000610bab610a6160808a0160608b0161258b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610bdc60208b018b61258b565b610bec60608c0160408d0161258b565b610bfc60808d0160608e0161258b565b8c60800135898711610c0e5786610c18565b610c188a88612363565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610d27576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610cfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d229190612629565b610d29565b475b92915050565b60608160008167ffffffffffffffff811115610d4d57610d4d611f9a565b604051908082528060200260200182016040528015610d76578160200160208202803683370190505b5090506000805b83811015610e3057868682818110610d9757610d9761251e565b9050602002810190610da9919061254d565b610dba90608081019060600161258b565b9150610dc582610c76565b838281518110610dd757610dd761251e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e285734838281518110610e1057610e1061251e565b60200260200101818151610e249190612363565b9052505b600101610d7d565b509095945050505050565b60005b8181101561096f5736838383818110610e5957610e5961251e565b9050602002810190610e6b919061254d565b9050610e7d60e0820160c08301612642565b15610e9f57610e9f610e95606083016040840161258b565b8260800135611638565b50600101610e3e565b83838383826001811461115b5760008585610ec4600185612363565b818110610ed357610ed361251e565b9050602002810190610ee5919061254d565b610ef690608081019060600161258b565b9050600089815b8181101561108757368d8d83818110610f1857610f1861251e565b9050602002810190610f2a919061254d565b9050610f3f610a1f606083016040840161258b565b80610fa25750610fa2610f58604083016020840161258b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fb95750610fb9610f58602083018361258b565b801561103e575061103e610fd060a08301836125ad565b610fdf9160049160009161265f565b610fe891612689565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611074576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107e8f8261097e565b50600101610efd565b505060005b611097600185612363565b8110156111535760008888838181106110b2576110b261251e565b90506020028101906110c4919061254d565b6110d590608081019060600161258b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461114a5785828151811061111c5761111c61251e565b602002602001015161112d82610c76565b6111379190612363565b9250821561114a5761114a818885610948565b5060010161108c565b50505061049d565b8760005b8181101561123157368b8b8381811061117a5761117a61251e565b905060200281019061118c919061254d565b90506111a1610a1f606083016040840161258b565b806111ba57506111ba610f58604083016020840161258b565b80156111d157506111d1610f58602083018361258b565b80156111e857506111e8610fd060a08301836125ad565b61121e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112288d8261097e565b5060010161115f565b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661128c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112d9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136a9190612629565b9050808211156113b0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610931565b6113bb8484846117ae565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661140e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611451576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610931565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114ab576040519150601f19603f3d011682016040523d82523d6000602084013e6114b0565b606091505b505090508061096f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661150b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611558576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156115cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f19190612629565b101561096f5761160383836000611882565b61096f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611882565b8051602082018181fd5b80600003611672576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116cb57803410156116c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611738573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061175c9190612629565b9050818110156117a2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610931565b61096f83333085611a04565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261096f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c1e565b80158061192257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156118fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119209190612629565b155b6119ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610931565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261096f9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611800565b73ffffffffffffffffffffffffffffffffffffffff8416611a51576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a9e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b339190612629565b9050611b4182868686611d2d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611bb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd59190612629565b611bdf9190612363565b14611c16576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6000611c80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d8b9092919063ffffffff16565b9050805160001480611ca1575080806020019051810190611ca191906126d1565b61096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610931565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113bb9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611800565b6060611d9a8484600085611da2565b949350505050565b606082471015611e34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610931565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e5d91906126ee565b60006040518083038185875af1925050503d8060008114611e9a576040519150601f19603f3d011682016040523d82523d6000602084013e611e9f565b606091505b5091509150611eb087838387611ebb565b979650505050505050565b60608315611f51578251600003611f4a5773ffffffffffffffffffffffffffffffffffffffff85163b611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610931565b5081611d9a565b611d9a8383815115611f665781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109319190612700565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fed57611fed611f9a565b60405290565b600082601f83011261200457600080fd5b813567ffffffffffffffff8082111561201f5761201f611f9a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561206557612065611f9a565b8160405283815286602085880101111561207e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120c257600080fd5b919050565b80151581146120d557600080fd5b50565b80356120c2816120c7565b600061014082840312156120f657600080fd5b6120fe611fc9565b905081358152602082013567ffffffffffffffff8082111561211f57600080fd5b61212b85838601611ff3565b6020840152604084013591508082111561214457600080fd5b5061215184828501611ff3565b6040830152506121636060830161209e565b60608201526121746080830161209e565b608082015261218560a0830161209e565b60a082015260c082013560c082015260e082013560e08201526101006121ac8184016120d8565b908201526101206121be8382016120d8565b9082015292915050565b6000602082840312156121da57600080fd5b50919050565b600080600080606085870312156121f657600080fd5b843567ffffffffffffffff8082111561220e57600080fd5b61221a888389016120e3565b9550602087013591508082111561223057600080fd5b818701915087601f83011261224457600080fd5b81358181111561225357600080fd5b8860208260051b850101111561226857600080fd5b60208301955080945050505061228186604087016121c8565b905092959194509250565b6000806000606084860312156122a157600080fd5b833567ffffffffffffffff8111156122b857600080fd5b840160e081870312156122ca57600080fd5b9250602084013591506122df6040850161209e565b90509250925092565b6000806000606084860312156122fd57600080fd5b83359250602084013591506122df6040850161209e565b6000806040838503121561232757600080fd5b823567ffffffffffffffff81111561233e57600080fd5b61234a858286016120e3565b92505061235a84602085016121c8565b90509250929050565b81810381811115610d29577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60005b838110156123b85781810151838201526020016123a0565b50506000910152565b600081518084526123d981602086016020860161239d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124346101608501836123c1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261246f83826123c1565b9250506060850151612499608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061250c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261258157600080fd5b9190910192915050565b60006020828403121561259d57600080fd5b6125a68261209e565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125e257600080fd5b83018035915067ffffffffffffffff8211156125fd57600080fd5b60200191503681900382131561261257600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561263b57600080fd5b5051919050565b60006020828403121561265457600080fd5b81356125a6816120c7565b6000808585111561266f57600080fd5b8386111561267c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126c95780818660040360031b1b83161692505b505092915050565b6000602082840312156126e357600080fd5b81516125a6816120c7565b6000825161258181846020870161239d565b6020815260006125a660208301846123c156fea264697066735822122045b7cb6d33e628cf7d69d8946e5d6a103cc69d602840b3e60c7cdabf5f28ac3064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipERC20";
        readonly inputs: readonly [{
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
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
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipNative";
        readonly inputs: readonly [{
            readonly name: "_amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidCallData";
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
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
