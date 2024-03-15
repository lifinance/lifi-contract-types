import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CircleBridgeFacet, CircleBridgeFacetInterface } from "../CircleBridgeFacet";
declare type CircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CircleBridgeFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CircleBridgeFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CircleBridgeFacet;
    connect(signer: Signer): CircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a4038038062002a40833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612953620000ed6000396000818161024e015281816102db0152818161050501528181610768015261086701526000818161078901526107ce01526129536000f3fe6080604052600436106100295760003560e01c806302d452ab1461002e578063e9017dc514610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004612117565b610063565b005b61004e61005e3660046123da565b610324565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556100eb83612486565b80610100015115610128576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013184612486565b8061012001511561016e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61017785612486565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101c8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610206576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610243576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024c86612486565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103047f00000000000000000000000000000000000000000000000000000000000000008960c001356105e3565b61031661031089612486565b88610763565b505060009093555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103b034476124c1565b9050868061010001516103ef576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561042d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104508160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610487576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610502576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b897f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058d576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a28c600001518d60c001518d8d3361090e565b60c08d01526105b18c8a610763565b50479350505050818111156105d5576105d56000846105d085856124c1565b610a51565b505060009091555050505050565b8060000361061d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106765780341015610672576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070791906124d4565b905081811015610752576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61075e83333085610a82565b505050565b6107b27f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460c00151610cac565b60c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636fd3504e9061080260208501856124ed565b60a086015160405160e085901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019390935263ffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f00000000000000000000000000000000000000000000000000000000000000001660648201526084016020604051808303816000875af11580156108ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d29190612513565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161090291906125ab565b60405180910390a15050565b60008280820361094a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856109596001856124c1565b818110610968576109686126be565b905060200281019061097a91906126ed565b61098b90608081019060600161272b565b9050600061099882610def565b905073ffffffffffffffffffffffffffffffffffffffff82166109c2576109bf34826124c1565b90505b60006109ce8888610ea8565b90506109da8888610fb4565b6109e78a89898985611021565b6000826109f385610def565b6109fd91906124c1565b905089811015610a43576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610749565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a785761075e8383836113d3565b61075e8282611555565b73ffffffffffffffffffffffffffffffffffffffff8416610acf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b1c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb191906124d4565b9050610bbf8286868661167f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5491906124d4565b610c5e91906124c1565b905083610c6c826001612746565b11610ca3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ccc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d19576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db291906124d4565b101561075e57610dc48383600061175b565b61075e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61175b565b600073ffffffffffffffffffffffffffffffffffffffff821615610ea0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b91906124d4565b610ea2565b475b92915050565b60608160008167ffffffffffffffff811115610ec657610ec661216c565b604051908082528060200260200182016040528015610eef578160200160208202803683370190505b5090506000805b83811015610fa957868682818110610f1057610f106126be565b9050602002810190610f2291906126ed565b610f3390608081019060600161272b565b9150610f3e82610def565b838281518110610f5057610f506126be565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fa15734838281518110610f8957610f896126be565b60200260200101818151610f9d91906124c1565b9052505b600101610ef6565b509095945050505050565b60005b8181101561075e5736838383818110610fd257610fd26126be565b9050602002810190610fe491906126ed565b9050610ff660e0820160c08301612759565b156110185761101861100e606083016040840161272b565b82608001356105e3565b50600101610fb7565b8383838382600181146112ee576000858561103d6001856124c1565b81811061104c5761104c6126be565b905060200281019061105e91906126ed565b61106f90608081019060600161272b565b9050600089815b8181101561121a57368d8d83818110611091576110916126be565b90506020028101906110a391906126ed565b90506110d26110b8606083016040840161272b565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061113557506111356110eb604083016020840161272b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561114c575061114c6110eb602083018361272b565b80156111d157506111d161116360a0830183612776565b611172916004916000916127e2565b61117b9161280c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611207576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112118f826118dd565b50600101611076565b505060005b61122a6001856124c1565b8110156112e6576000888883818110611245576112456126be565b905060200281019061125791906126ed565b61126890608081019060600161272b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112dd578582815181106112af576112af6126be565b60200260200101516112c082610def565b6112ca91906124c1565b925082156112dd576112dd818885610a51565b5060010161121f565b5050506113c7565b8760005b818110156113c457368b8b8381811061130d5761130d6126be565b905060200281019061131f91906126ed565b90506113346110b8606083016040840161272b565b8061134d575061134d6110eb604083016020840161272b565b801561136457506113646110eb602083018361272b565b801561137b575061137b61116360a0830183612776565b6113b1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113bb8d826118dd565b506001016112f2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611420576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661146d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fe91906124d4565b905080821115611544576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610749565b61154f848484611bf3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166115a2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115e5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610749565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461163f576040519150601f19603f3d011682016040523d82523d6000602084013e611644565b606091505b505090508061075e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261154f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c49565b8015806117fb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f991906124d4565b155b611887576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610749565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261075e9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116d9565b6118f36118ed602083018361272b565b3b151590565b611929576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611969576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061197e6110b8606085016040860161272b565b61198957600061198f565b82608001355b905060006119ab6119a6606086016040870161272b565b610def565b905060006119c26119a6608087016060880161272b565b9050826000036119f9576119f96119df606087016040880161272b565b6119ef604088016020890161272b565b8760800135610cac565b8460800135821015611a44576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610749565b600080611a54602088018861272b565b73ffffffffffffffffffffffffffffffffffffffff1685611a7860a08a018a612776565b604051611a86929190612854565b60006040518083038185875af1925050503d8060008114611ac3576040519150601f19603f3d011682016040523d82523d6000602084013e611ac8565b606091505b509150915081611b13576000611add82611d58565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107499190612864565b6000611b286119a660808a0160608b0161272b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b5960208b018b61272b565b611b6960608c0160408d0161272b565b611b7960808d0160608e0161272b565b8c60800135898711611b8b5786611b95565b611b958a886124c1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261075e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116d9565b6000611cab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dd69092919063ffffffff16565b9050805160001480611ccc575080806020019051810190611ccc9190612877565b61075e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610749565b6060604482511015611d9d57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611db96004808551611db191906124c1565b859190611ded565b905080806020019051810190611dcf9190612894565b9392505050565b6060611de58484600085611f07565b949350505050565b606081611dfb81601f612746565b1015611e33576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e3d8284612746565b84511015611e77576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e965760405191506000825260208201604052611efe565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ecf578051835260209283019201611eb7565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610749565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fc2919061290b565b60006040518083038185875af1925050503d8060008114611fff576040519150601f19603f3d011682016040523d82523d6000602084013e612004565b606091505b509150915061201587838387612020565b979650505050505050565b606083156120b65782516000036120af5773ffffffffffffffffffffffffffffffffffffffff85163b6120af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610749565b5081611de5565b611de583838151156120cb5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107499190612864565b60006020828403121561211157600080fd5b50919050565b6000806040838503121561212a57600080fd5b823567ffffffffffffffff81111561214157600080fd5b8301610140818603121561215457600080fd5b915061216384602085016120ff565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121bf576121bf61216c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561220c5761220c61216c565b604052919050565b600067ffffffffffffffff82111561222e5761222e61216c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261226b57600080fd5b813561227e61227982612214565b6121c5565b81815284602083860101111561229357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146122d457600080fd5b919050565b80151581146122e757600080fd5b50565b80356122d4816122d9565b6000610140828403121561230857600080fd5b61231061219b565b905081358152602082013567ffffffffffffffff8082111561233157600080fd5b61233d8583860161225a565b6020840152604084013591508082111561235657600080fd5b506123638482850161225a565b604083015250612375606083016122b0565b6060820152612386608083016122b0565b608082015261239760a083016122b0565b60a082015260c082013560c082015260e082013560e08201526101006123be8184016122ea565b908201526101206123d08382016122ea565b9082015292915050565b600080600080606085870312156123f057600080fd5b843567ffffffffffffffff8082111561240857600080fd5b612414888389016122f5565b9550602087013591508082111561242a57600080fd5b818701915087601f83011261243e57600080fd5b81358181111561244d57600080fd5b8860208260051b850101111561246257600080fd5b60208301955080945050505061247b86604087016120ff565b905092959194509250565b6000610ea236836122f5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ea257610ea2612492565b6000602082840312156124e657600080fd5b5051919050565b6000602082840312156124ff57600080fd5b813563ffffffff81168114611dcf57600080fd5b60006020828403121561252557600080fd5b815167ffffffffffffffff81168114611dcf57600080fd5b60005b83811015612558578181015183820152602001612540565b50506000910152565b6000815180845261257981602086016020860161253d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125d4610160850183612561565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261260f8382612561565b9250506060850151612639608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126ac8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261272157600080fd5b9190910192915050565b60006020828403121561273d57600080fd5b611dcf826122b0565b80820180821115610ea257610ea2612492565b60006020828403121561276b57600080fd5b8135611dcf816122d9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127ab57600080fd5b83018035915067ffffffffffffffff8211156127c657600080fd5b6020019150368190038213156127db57600080fd5b9250929050565b600080858511156127f257600080fd5b838611156127ff57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561284c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611dcf6020830184612561565b60006020828403121561288957600080fd5b8151611dcf816122d9565b6000602082840312156128a657600080fd5b815167ffffffffffffffff8111156128bd57600080fd5b8201601f810184136128ce57600080fd5b80516128dc61227982612214565b8181528560208385010111156128f157600080fd5b61290282602083016020860161253d565b95945050505050565b6000825161272181846020870161253d56fea2646970667358221220b4465144829eb24baf027b4fcab37256c090cdfb8f1801aa7c75fe339aea69a464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessenger";
            readonly type: "address";
            readonly internalType: "contract ITokenMessenger";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCircleBridge";
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
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly components: readonly [{
                readonly name: "dstDomain";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCircleBridge";
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
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly components: readonly [{
                readonly name: "dstDomain";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): CircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CircleBridgeFacet;
}
export {};
