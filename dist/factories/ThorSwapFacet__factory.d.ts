import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028e9380380620028e9833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161284e6200009b6000396000818161069d01526106c8015261284e6000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c366004612234565b610056565b005b610041610051366004612298565b6102c8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612386565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024142610e10612399565b8760400135101561027e576040517ffb2a675200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029088608001518960c001516104f5565b61029a8888610675565b5047915050818111156102bc576102bc6000846102b78585612386565b6107cd565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610343576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103543447612386565b905086806101000151610393576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103d1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103f48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561042b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610469576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104bb8a600001518b60c001518b8b336107fe565b60c08b01526104ca8a88610675565b5047915050818111156104e7576104e76000846102b78585612386565b505060009091555050505050565b8060000361052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105885780341015610584576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906123ac565b905081811015610664576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61067083333085610941565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff811615806106c6576106c6827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261070e576000610714565b8560c001515b61072160208701876123c5565b608088015160c089015161073860208a018a6123e0565b8a604001356040518863ffffffff1660e01b815260040161075e9695949392919061244c565b6000604051808303818588803b15801561077757600080fd5b505af115801561078b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107bf9190612540565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107f457610670838383610c9e565b6106708282610e20565b60008280820361083a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610849600185612386565b81811061085857610858612653565b905060200281019061086a9190612682565b61087b9060808101906060016123c5565b9050600061088882610f4a565b905073ffffffffffffffffffffffffffffffffffffffff82166108b2576108af3482612386565b90505b60006108be8888611003565b90506108ca888861110f565b6108d78a8989898561117c565b6000826108e385610f4a565b6108ed9190612386565b905089811015610933576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161065b565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841661098e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109db576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7091906123ac565b9050610a7e8286868661152e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610aee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1291906123ac565b610b1c9190612386565b14610b53576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b7b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bc8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6191906123ac565b101561067057610c738383600061160a565b61067083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61160a565b73ffffffffffffffffffffffffffffffffffffffff8316610ceb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d38576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc991906123ac565b905080821115610e0f576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161065b565b610e1a84848461178c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e6d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eb0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161065b565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f0a576040519150601f19603f3d011682016040523d82523d6000602084013e610f0f565b606091505b5050905080610670576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ffb576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff691906123ac565b610ffd565b475b92915050565b60608160008167ffffffffffffffff81111561102157611021611fae565b60405190808252806020026020018201604052801561104a578160200160208202803683370190505b5090506000805b838110156111045786868281811061106b5761106b612653565b905060200281019061107d9190612682565b61108e9060808101906060016123c5565b915061109982610f4a565b8382815181106110ab576110ab612653565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110fc57348382815181106110e4576110e4612653565b602002602001018181516110f89190612386565b9052505b600101611051565b509095945050505050565b60005b81811015610670573683838381811061112d5761112d612653565b905060200281019061113f9190612682565b905061115160e0820160c083016126c0565b156111735761117361116960608301604084016123c5565b82608001356104f5565b50600101611112565b8383838382600181146114495760008585611198600185612386565b8181106111a7576111a7612653565b90506020028101906111b99190612682565b6111ca9060808101906060016123c5565b9050600089815b8181101561137557368d8d838181106111ec576111ec612653565b90506020028101906111fe9190612682565b905061122d61121360608301604084016123c5565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611290575061129061124660408301602084016123c5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112a757506112a761124660208301836123c5565b801561132c575061132c6112be60a08301836123e0565b6112cd916004916000916126dd565b6112d691612707565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611362576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61136c8f826117e2565b506001016111d1565b505060005b611385600185612386565b8110156114415760008888838181106113a0576113a0612653565b90506020028101906113b29190612682565b6113c39060808101906060016123c5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114385785828151811061140a5761140a612653565b602002602001015161141b82610f4a565b6114259190612386565b92508215611438576114388188856107cd565b5060010161137a565b505050611522565b8760005b8181101561151f57368b8b8381811061146857611468612653565b905060200281019061147a9190612682565b905061148f61121360608301604084016123c5565b806114a857506114a861124660408301602084016123c5565b80156114bf57506114bf61124660208301836123c5565b80156114d657506114d66112be60a08301836123e0565b61150c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115168d826117e2565b5060010161144d565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e1a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611af8565b8015806116aa57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a891906123ac565b155b611736576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161065b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106709084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611588565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106709084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611588565b6117f86117f260208301836123c5565b3b151590565b61182e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361186e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061188361121360608501604086016123c5565b61188e576000611894565b82608001355b905060006118b06118ab60608601604087016123c5565b610f4a565b905060006118c76118ab60808701606088016123c5565b9050826000036118fe576118fe6118e460608701604088016123c5565b6118f460408801602089016123c5565b8760800135610b5b565b8460800135821015611949576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161065b565b60008061195960208801886123c5565b73ffffffffffffffffffffffffffffffffffffffff168561197d60a08a018a6123e0565b60405161198b92919061274f565b60006040518083038185875af1925050503d80600081146119c8576040519150601f19603f3d011682016040523d82523d6000602084013e6119cd565b606091505b509150915081611a185760006119e282611c07565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b919061275f565b6000611a2d6118ab60808a0160608b016123c5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a5e60208b018b6123c5565b611a6e60608c0160408d016123c5565b611a7e60808d0160608e016123c5565b8c60800135898711611a905786611a9a565b611a9a8a88612386565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b5a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c859092919063ffffffff16565b9050805160001480611b7b575080806020019051810190611b7b9190612772565b610670576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161065b565b6060604482511015611c4c57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c686004808551611c609190612386565b859190611c9c565b905080806020019051810190611c7e919061278f565b9392505050565b6060611c948484600085611db6565b949350505050565b606081611caa81601f612399565b1015611ce2576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cec8284612399565b84511015611d26576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d455760405191506000825260208201604052611dad565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d7e578051835260209283019201611d66565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161065b565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e719190612806565b60006040518083038185875af1925050503d8060008114611eae576040519150601f19603f3d011682016040523d82523d6000602084013e611eb3565b606091505b5091509150611ec487838387611ecf565b979650505050505050565b60608315611f65578251600003611f5e5773ffffffffffffffffffffffffffffffffffffffff85163b611f5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065b565b5081611c94565b611c948383815115611f7a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b919061275f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561200157612001611fae565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561204e5761204e611fae565b604052919050565b600067ffffffffffffffff82111561207057612070611fae565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120ad57600080fd5b81356120c06120bb82612056565b612007565b8181528460208386010111156120d557600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461211657600080fd5b919050565b801515811461212957600080fd5b50565b80356121168161211b565b6000610140828403121561214a57600080fd5b612152611fdd565b905081358152602082013567ffffffffffffffff8082111561217357600080fd5b61217f8583860161209c565b6020840152604084013591508082111561219857600080fd5b506121a58482850161209c565b6040830152506121b7606083016120f2565b60608201526121c8608083016120f2565b60808201526121d960a083016120f2565b60a082015260c082013560c082015260e082013560e082015261010061220081840161212c565b9082015261012061221283820161212c565b9082015292915050565b60006060828403121561222e57600080fd5b50919050565b6000806040838503121561224757600080fd5b823567ffffffffffffffff8082111561225f57600080fd5b61226b86838701612137565b9350602085013591508082111561228157600080fd5b5061228e8582860161221c565b9150509250929050565b600080600080606085870312156122ae57600080fd5b843567ffffffffffffffff808211156122c657600080fd5b6122d288838901612137565b955060208701359150808211156122e857600080fd5b818701915087601f8301126122fc57600080fd5b81358181111561230b57600080fd5b8860208260051b850101111561232057600080fd5b60208301955080945050604087013591508082111561233e57600080fd5b5061234b8782880161221c565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ffd57610ffd612357565b80820180821115610ffd57610ffd612357565b6000602082840312156123be57600080fd5b5051919050565b6000602082840312156123d757600080fd5b611c7e826120f2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261241557600080fd5b83018035915067ffffffffffffffff82111561243057600080fd5b60200191503681900382131561244557600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b838110156124ed5781810151838201526020016124d5565b50506000910152565b6000815180845261250e8160208601602086016124d2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125696101608501836124f6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125a483826124f6565b92505060608501516125ce608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126418187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126b657600080fd5b9190910192915050565b6000602082840312156126d257600080fd5b8135611c7e8161211b565b600080858511156126ed57600080fd5b838611156126fa57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127475780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c7e60208301846124f6565b60006020828403121561278457600080fd5b8151611c7e8161211b565b6000602082840312156127a157600080fd5b815167ffffffffffffffff8111156127b857600080fd5b8201601f810184136127c957600080fd5b80516127d76120bb82612056565b8181528560208385010111156127ec57600080fd5b6127fd8260208301602086016124d2565b95945050505050565b600082516126b68184602087016124d256fea26469706673582212207e6540c6af8e436596cede6d7bc03d434bfe4dc0f03439aaae0fec80f2e8652064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_thorchainRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidExpiration";
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
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
