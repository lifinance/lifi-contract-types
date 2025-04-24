import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061221c806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063a01fe78414610086578063b3b6358714610099575b600080fd5b34801561005057600080fd5b5061006461005f366004611a14565b6100ac565b005b34801561007257600080fd5b50610064610081366004611a47565b6101ad565b610064610094366004611cce565b610356565b6100646100a7366004611d7b565b61058d565b6100b46107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff8216610122576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b56107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860005b828110156103175760008484838181106101f5576101f5611dc2565b905060400201602001602081019061020d9190611df1565b73ffffffffffffffffffffffffffffffffffffffff160361025a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026c5761026c611dc2565b90506040020160200160208101906102849190611df1565b82600086868581811061029957610299611dc2565b6102af9260206040909202019081019150611df1565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061030f81611e42565b9150506101d9565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610349929190611e7a565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103e23447611ee9565b905086806101000151610421576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561045f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610534576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054e8a600001518b60c001518b8b338c60e00135610826565b60c08b015261055d8a886109c6565b50479150508181111561057f5761057f60008461057a8585611ee9565b610c87565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610608576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106193447611ee9565b90508480610100015115610659576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610697576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361076c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077e88608001518960c00151610cbd565b61078888886109c6565b5047915050818111156107a5576107a560008461057a8585611ee9565b50506000909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610824576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600083808203610862576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610871600185611ee9565b81811061088057610880611dc2565b90506020028101906108929190611efc565b6108a3906080810190606001611df1565b905060006108b082610d72565b905073ffffffffffffffffffffffffffffffffffffffff82166108da576108d73482611ee9565b90505b60006108e68989610dbd565b90506108f28989610ec9565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261092d818b8b85610f36565b60008361093986610d72565b6109439190611ee9565b905073ffffffffffffffffffffffffffffffffffffffff851661096d5761096a8882611ee9565b90505b8b8110156109b6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660008181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860208190526040909120549092169015610a2c57610a2c83828760c00151611327565b600073ffffffffffffffffffffffffffffffffffffffff841615610a54578460e00135610a67565b60c0860151610a679060e0870135611f3a565b90504660011480610a785750466005145b15610b76578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610ac69190611df1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4016000604051808303818588803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b5050505050610c48565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610c2e57600080fd5b505af1158015610c42573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c779190611fb1565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610cb357610cae838383611353565b505050565b610cae82826113c1565b80600003610cf7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d505780341015610d4c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d4c73ffffffffffffffffffffffffffffffffffffffff831633308461142e565b600073ffffffffffffffffffffffffffffffffffffffff821615610db557610db073ffffffffffffffffffffffffffffffffffffffff83163061148b565b610db7565b475b92915050565b60608160008167ffffffffffffffff811115610ddb57610ddb611abc565b604051908082528060200260200182016040528015610e04578160200160208202803683370190505b5090506000805b83811015610ebe57868682818110610e2557610e25611dc2565b9050602002810190610e379190611efc565b610e48906080810190606001611df1565b9150610e5382610d72565b838281518110610e6557610e65611dc2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610eb65734838281518110610e9e57610e9e611dc2565b60200260200101818151610eb29190611ee9565b9052505b600101610e0b565b509095945050505050565b60005b81811015610cae5736838383818110610ee757610ee7611dc2565b9050602002810190610ef99190611efc565b9050610f0b60e0820160c083016120c4565b15610f2d57610f2d610f236060830160408401611df1565b8260800135610cbd565b50600101610ecc565b6020840151604085015184918491849083600181146112405760008686610f5e600185611ee9565b818110610f6d57610f6d611dc2565b9050602002810190610f7f9190611efc565b610f90906080810190606001611df1565b9050600089815b8181101561113d57368d8d83818110610fb257610fb2611dc2565b9050602002810190610fc49190611efc565b9050610ff3610fd96060830160408401611df1565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611056575061105661100c6040830160208401611df1565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561106d575061106d61100c6020830183611df1565b80156110f257506110f261108460a08301836120df565b6110939160049160009161214b565b61109c91612175565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611128576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161113490826114c0565b50600101610f97565b505060005b61114d600185611ee9565b81101561123857600089898381811061116857611168611dc2565b905060200281019061117a9190611efc565b61118b906080810190606001611df1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461122f578682815181106111d2576111d2611dc2565b60200260200101516111e382610d72565b6111ed9190611ee9565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611214576000611216565b865b9050831561122d5761122d828a61057a8488611ee9565b505b50600101611142565b50505061131b565b8760005b8181101561131857368b8b8381811061125f5761125f611dc2565b90506020028101906112719190611efc565b9050611286610fd96060830160408401611df1565b8061129f575061129f61100c6040830160208401611df1565b80156112b657506112b661100c6020830183611df1565b80156112cd57506112cd61108460a08301836120df565b611303576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161130f90826114c0565b50600101611244565b50505b50505050505050505050565b610cae8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61179d565b73ffffffffffffffffffffffffffffffffffffffff82166113a0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cae73ffffffffffffffffffffffffffffffffffffffff841683836118b0565b73ffffffffffffffffffffffffffffffffffffffff821661140e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d4c73ffffffffffffffffffffffffffffffffffffffff8316826118ff565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661147d57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6114d56114d06020830183611df1565b61191b565b61150b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361154b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611560610fd96060850160408601611df1565b61156b576000611571565b82608001355b9050600061158d6115886060860160408701611df1565b610d72565b905060006115a46115886080870160608801611df1565b9050826000036115db576115db6115c16060870160408801611df1565b6115d16040880160208901611df1565b8760800135611327565b8460800135821015611626576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016109ad565b6000806116366020880188611df1565b73ffffffffffffffffffffffffffffffffffffffff168561165a60a08a018a6120df565b6040516116689291906121bd565b60006040518083038185875af1925050503d80600081146116a5576040519150601f19603f3d011682016040523d82523d6000602084013e6116aa565b606091505b5091509150816116bd576116bd81611957565b60006116d261158860808a0160608b01611df1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961170360208b018b611df1565b61171360608c0160408d01611df1565b61172360808d0160608e01611df1565b8c60800135898711611735578661173f565b61173f8a88611ee9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166117ea576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561185f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188391906121cd565b10156118aa576118aa73ffffffffffffffffffffffffffffffffffffffff85168483611961565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166118f5576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610d4c5763b12d13eb6000526004601cfd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470811580159061194f5750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166118f55760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166118f557633e3f8f736000526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff81168114611a0f57600080fd5b919050565b60008060408385031215611a2757600080fd5b611a30836119eb565b9150611a3e602084016119eb565b90509250929050565b60008060208385031215611a5a57600080fd5b823567ffffffffffffffff80821115611a7257600080fd5b818501915085601f830112611a8657600080fd5b813581811115611a9557600080fd5b8660208260061b8501011115611aaa57600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611b0f57611b0f611abc565b60405290565b600082601f830112611b2657600080fd5b813567ffffffffffffffff80821115611b4157611b41611abc565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611b8757611b87611abc565b81604052838152866020858801011115611ba057600080fd5b836020870160208301376000602085830101528094505050505092915050565b80358015158114611a0f57600080fd5b60006101408284031215611be357600080fd5b611beb611aeb565b905081358152602082013567ffffffffffffffff80821115611c0c57600080fd5b611c1885838601611b15565b60208401526040840135915080821115611c3157600080fd5b50611c3e84828501611b15565b604083015250611c50606083016119eb565b6060820152611c61608083016119eb565b6080820152611c7260a083016119eb565b60a082015260c082013560c082015260e082013560e0820152610100611c99818401611bc0565b90820152610120611cab838201611bc0565b9082015292915050565b60006101008284031215611cc857600080fd5b50919050565b6000806000806101408587031215611ce557600080fd5b843567ffffffffffffffff80821115611cfd57600080fd5b611d0988838901611bd0565b95506020870135915080821115611d1f57600080fd5b818701915087601f830112611d3357600080fd5b813581811115611d4257600080fd5b8860208260051b8501011115611d5757600080fd5b602083019550809450505050611d708660408701611cb5565b905092959194509250565b6000806101208385031215611d8f57600080fd5b823567ffffffffffffffff811115611da657600080fd5b611db285828601611bd0565b925050611a3e8460208501611cb5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611e0357600080fd5b611e0c826119eb565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611e7357611e73611e13565b5060010190565b6020808252818101839052600090604080840186845b87811015611edc5773ffffffffffffffffffffffffffffffffffffffff80611eb7846119eb565b16845280611ec68785016119eb565b1684870152509183019190830190600101611e90565b5090979650505050505050565b81810381811115610db757610db7611e13565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611f3057600080fd5b9190910192915050565b80820180821115610db757610db7611e13565b6000815180845260005b81811015611f7357602081850181015186830182015201611f57565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611fda610160850183611f4d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526120158382611f4d565b925050606085015161203f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206120b28187018315159052565b90950151151593019290925250919050565b6000602082840312156120d657600080fd5b611e0c82611bc0565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261211457600080fd5b83018035915067ffffffffffffffff82111561212f57600080fd5b60200191503681900382131561214457600080fd5b9250929050565b6000808585111561215b57600080fd5b8386111561216857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156121b55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156121df57600080fd5b505191905056fea26469706673582212204e6264549e83d9ccb9e954abccdae8223dcd236efd22619d9509d2713b9e5c7b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initHop";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "swapAndStartBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "HopBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HopInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
